import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { actionTypes } from "../../../../actions/actionTypes";
import {
  s_createScQueryResponseSaga,
  generateScqId
} from "../../../../sagas/server/responses/createScQueryResponse";
import { testFunction } from "../../../../utils/testing";

describe("s_createScQueryResponse saga", () => {
  describe("when everything is alright", () => {
    let saga;
    const clientId = 0;
    const scqId = 1;
    const scqData = { foo: "bar" };
    const userId = 1;
    const newDoc = {
      ...scqData,
      id: scqId,
      userId
    };

    beforeEach(() => {
      saga = expectSaga(s_createScQueryResponseSaga, clientId, scqData)
        .withState({
          server: {
            clients: [{ id: 0, userId }]
          },
          client: {
            users: [{ id: 1 }]
          }
        })
        .provide([[matchers.call.fn(generateScqId), scqId]]);
    });

    it("should broadcast the new supercollider query", () => {
      return saga
        .put({
          type: actionTypes.S_BROADCAST,
          clientId,
          message: {
            type: actionTypes.B_SC_QUERY_CREATED,
            scqId,
            scqData: newDoc
          }
        })
        .run();
    });

    it("should transmit a success message", () => {
      return saga
        .put({
          type: actionTypes.S_TRANSMIT,
          clientId,
          message: {
            type: actionTypes.S_CREATE_SC_QUERY_SUCCESS,
            scqId,
            scqData: newDoc
          }
        })
        .run();
    });
  });

  describe("when an error is raised", () => {
    it("should transmit an error 500 message to the client", () => {
      const clientId = 0;
      const scqData = {};
      return expectSaga(s_createScQueryResponseSaga, clientId, scqData)
        .provide([
          [
            matchers.call.fn(testFunction),
            () => {
              throw new Error("test");
            }
          ]
        ])
        .put.like({
          action: {
            type: actionTypes.S_TRANSMIT,
            clientId,
            message: {
              type: actionTypes.S_CREATE_SC_QUERY_ERROR,
              error: { status: 500 }
            }
          }
        })
        .run();
    });
  });
});
