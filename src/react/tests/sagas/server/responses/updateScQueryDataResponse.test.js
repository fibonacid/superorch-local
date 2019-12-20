import _ from "lodash";
import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { actionTypes } from "../../../../actions/actionTypes";
import { s_updateScQueryDataResponseSaga } from "../../../../sagas/server/responses/updateScQueryDataResponse";
import { testFunction } from "../../../../utils/testing";

describe("s_updateScQueryData saga", () => {
  describe("when everything is alright", () => {
    const clientId = 0;
    const userId = 1;
    const scqId = 2;
    const scqData = { foo: "bar", id: 99, userId: 100 };

    let saga;
    beforeEach(() => {
      saga = expectSaga(
        s_updateScQueryDataResponseSaga,
        clientId,
        scqId,
        scqData
      ).withState({
        server: {
          clients: [{ id: clientId, userId }]
        },
        client: {
          users: [{ id: userId }],
          scQueries: [{ id: scqId, userId }]
        }
      });
    });

    it("should broadcast a scQuery update", () => {
      return saga.put
        .like({
          action: {
            type: actionTypes.S_BROADCAST,
            clientId,
            message: {
              type: actionTypes.B_SC_QUERY_UPDATE
            }
          }
        })
        .run();
    });
    it("should transmit a success message", () => {
      return saga.put
        .like({
          action: {
            type: actionTypes.S_TRANSMIT,
            clientId,
            message: {
              type: actionTypes.S_UPDATE_SC_QUERY_DATA_SUCCESS
            }
          }
        })
        .run();
    });
    it("should filter out id and userId from the received data", () => {
      return saga
        .put({
          type: actionTypes.S_BROADCAST,
          clientId,
          message: {
            type: actionTypes.B_SC_QUERY_UPDATE,
            scqId,
            scqData: _.omit(scqData, ["id", "userId"])
          }
        })
        .run();
    });
  });

  describe("when scQuery doesn't exist", () => {
    const clientId = 0;
    const userId = 1;
    const scqId = 99;
    const scqData = { foo: "bar" };

    let saga;
    beforeEach(() => {
      saga = expectSaga(
        s_updateScQueryDataResponseSaga,
        clientId,
        scqId,
        scqData
      ).withState({
        server: {
          clients: [{ id: clientId, userId }]
        },
        client: {
          users: [{ id: userId }],
          scQueries: [{ id: 2, userId }]
        }
      });
    });

    it("should transmit an error 404 to the client", () => {
      return saga.put
        .like({
          action: {
            type: actionTypes.S_TRANSMIT,
            clientId,
            message: {
              type: actionTypes.S_UPDATE_SC_QUERY_DATA_ERROR,
              error: { status: 404 }
            }
          }
        })
        .run();
    });
  });

  describe("when scQuery is NOT owned by the client", () => {
    const clientId = 0;
    const userId = 1;
    const scqId = 2;
    const scqData = { foo: "bar" };

    let saga;
    beforeEach(() => {
      saga = expectSaga(
        s_updateScQueryDataResponseSaga,
        clientId,
        scqId,
        scqData
      ).withState({
        server: {
          clients: [{ id: clientId, userId }]
        },
        client: {
          users: [{ id: userId }],
          scQueries: [{ id: 2, userId: 10 }]
        }
      });
    });
  });

  describe("when an error is raised", () => {
    it("should transmit an error 500 message to the client", () => {
      const clientId = 0;
      const scqId = 0;
      const scqData = {};
      return expectSaga(
        s_updateScQueryDataResponseSaga,
        clientId,
        scqId,
        scqData
      )
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
              type: actionTypes.S_UPDATE_SC_QUERY_DATA_ERROR,
              error: { status: 500 }
            }
          }
        })
        .run();
    });
  });
});
