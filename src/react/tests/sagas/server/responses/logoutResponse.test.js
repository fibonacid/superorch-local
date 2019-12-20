import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { actionTypes } from "../../../../actions/actionTypes";
import { s_logoutResponseSaga } from "../../../../sagas/server/responses/logoutResponse";
import { testFunction } from "../../../../utils/testing";

describe("s_logoutResponse saga", () => {
  describe("when everything is alright", () => {
    let saga;
    const clientId = 0;
    const userId = 1;
    const userData = { foo: "bar" };
    const newUser = {
      ...userData,
      id: userId
    };

    beforeEach(() => {
      saga = expectSaga(s_logoutResponseSaga, clientId).withState({
        server: {
          clients: [{ id: 0, userId }]
        },
        client: {
          users: [{ id: 1 }]
        }
      });
    });

    it("should mark the client as logged out", () => {
      return saga
        .put({
          type: actionTypes.S_UPDATE_CLIENT,
          clientId,
          clientData: {
            isLoggedIn: false
          }
        })
        .run();
    });

    it("should broadcast that a user has left", () => {
      return saga
        .put({
          type: actionTypes.S_BROADCAST,
          clientId,
          message: {
            type: actionTypes.B_USER_LEFT,
            userId
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
            type: actionTypes.S_LOGOUT_SUCCESS,
            userId
          }
        })
        .run();
    });
  });

  describe("when an error is raised", () => {
    it("should transmit an error 500 message to the client", () => {
      const clientId = 0;
      return expectSaga(s_logoutResponseSaga, clientId)
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
              type: actionTypes.S_LOGOUT_ERROR,
              error: { status: 500 }
            }
          }
        })
        .run();
    });
  });
});
