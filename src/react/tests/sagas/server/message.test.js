import { expectSaga } from "redux-saga-test-plan";
import { s_messageWatcher } from "../../../sagas/server/message";
import { actionTypes } from "../../../actions/actionTypes";
import { c_messageWatcher } from "../../../sagas/client/message";
import { s_logoutResponseSaga } from "../../../sagas/server/responses/logoutResponse";
import { put } from "redux-saga/effects";

describe("s_messageWatcher", () => {
  describe("when the client is not logged in", () => {
    it("should send an error when client is NOT logged in", () => {
      return (
        expectSaga(s_messageWatcher)
          .withState({
            server: {
              clients: [{ id: 1, isLoggedIn: false }]
            }
          })
          .put.like({
            action: {
              type: actionTypes.S_TRANSMIT,
              clientId: 1,
              message: {
                type: actionTypes.S_MESSAGE_ERROR
              }
            }
          })
          // Dispatch any actions that the saga will `take`.
          .dispatch({
            type: actionTypes.S_MESSAGE,
            clientId: 1,
            message: JSON.stringify({
              type: actionTypes.C_LOGOUT_REQUEST
            })
          })
          // Start the test. Returns a Promise.
          .run()
      );
    });
    it("should handle message C_LOGIN_REQUEST", () => {
      return (
        expectSaga(s_messageWatcher)
          .withState({
            server: {
              clients: [{ id: 1, isLoggedIn: false }]
            }
          })
          .put({
            type: actionTypes.S_TRANSMIT,
            clientId: 1,
            message: {
              type: actionTypes.S_LOGIN_SUCCESS,
              userId: 1
            }
          })
          // Dispatch any actions that the saga will `take`.
          .dispatch({
            type: actionTypes.S_MESSAGE,
            clientId: 1,
            message: JSON.stringify({
              type: actionTypes.C_LOGIN_REQUEST
            })
          })
          // Start the test. Returns a Promise.
          .run()
      );
    });
  });

  describe("when the user is logged in", () => {
    it("should send an error on message C_LOGIN_REQUEST", () => {
      return (
        expectSaga(s_messageWatcher)
          .withState({
            server: {
              clients: [{ id: 1, isLoggedIn: true }]
            }
          })
          .put.like({
            action: {
              type: actionTypes.S_TRANSMIT,
              clientId: 1,
              message: {
                type: actionTypes.S_MESSAGE_ERROR
              }
            }
          })
          // Dispatch any actions that the saga will `take`.
          .dispatch({
            type: actionTypes.S_MESSAGE,
            clientId: 1,
            message: JSON.stringify({
              type: actionTypes.C_LOGIN_REQUEST
            })
          })
          // Start the test. Returns a Promise.
          .run()
      );
    });
    it.skip("should handle message C_LOGOUT_REQUEST", () => {
      return (
        expectSaga(c_messageWatcher)
          .withState({
            server: {
              clients: [{ id: 1, isLoggedIn: true }]
            }
          })
          // Assert that a call effect will happen
          .call(s_logoutResponseSaga, 1)
          // Dispatch any actions that the saga will `take`.
          .dispatch({
            type: actionTypes.S_MESSAGE,
            clientId: 1,
            message: JSON.stringify({
              type: actionTypes.C_LOGOUT_REQUEST
            })
          })
          // Start the test. Returns a Promise.
          .run()
      );
    });
    it.skip("should handle message C_GET_USER_LIST_REQUEST", () => {});
    it.skip("should handle message C_UPDATE_USER_DATA_REQUEST", () => {});
    it.skip("should handle message C_CREATE_DOCUMENT_REQUEST", () => {});
    it.skip("should handle message C_UPDATE_DOCUMENT_DATA_REQUEST", () => {});
    it.skip("should handle message C_GET_DOCUMENT_LIST_REQUEST", () => {});
    it.skip("should handle message C_GET_SC_QUERY_DATA_REQUEST", () => {});
    it.skip("should handle message C_UPDATE_SC_QUERY_DATA_REQUEST", () => {});
  });
});
