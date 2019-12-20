import _ from "lodash";
import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { actionTypes } from "../../../../actions/actionTypes";
import { s_updateUserDataResponseSaga } from "../../../../sagas/server/responses/updateUserDataResponse";
import { testFunction } from "../../../../utils/testing";

describe("s_updateUserData saga", () => {
  describe("when everything is alright", () => {
    const clientId = 0;
    const userId = 1;
    const userData = { foo: "bar", id: 99 };

    let saga;
    beforeEach(() => {
      saga = expectSaga(
        s_updateUserDataResponseSaga,
        clientId,
        userData
      ).withState({
        server: {
          clients: [{ id: clientId, userId }]
        },
        client: {
          users: [{ id: userId }]
        }
      });
    });

    it("should broadcast a user update", () => {
      return saga.put
        .like({
          action: {
            type: actionTypes.S_BROADCAST,
            clientId,
            message: {
              type: actionTypes.B_USER_UPDATE
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
              type: actionTypes.S_UPDATE_USER_DATA_SUCCESS
            }
          }
        })
        .run();
    });
    it("should filter out id from the received data", () => {
      return saga
        .put({
          type: actionTypes.S_BROADCAST,
          clientId,
          message: {
            type: actionTypes.B_USER_UPDATE,
            userId,
            userData: _.omit(userData, ["id"])
          }
        })
        .run();
    });
  });

  describe("when an error is raised", () => {
    it("should transmit an error 500 message to the client", () => {
      const clientId = 0;
      return expectSaga(s_updateUserDataResponseSaga, clientId, {})
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
              type: actionTypes.S_UPDATE_USER_DATA_ERROR,
              error: { status: 500 }
            }
          }
        })
        .run();
    });
  });
});
