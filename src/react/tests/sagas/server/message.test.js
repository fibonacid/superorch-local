import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { actionTypes } from "../../../actions/actionTypes";
import { s_messageWatcher } from "../../../sagas/server/message";
import { c_messageWatcher } from "../../../sagas/client/message";
import { s_logoutResponseSaga } from "../../../sagas/server/responses/logoutResponse";
import { s_getUserListResponseSaga } from "../../../sagas/server/responses/getUserListResponse";
import { s_updateUserDataResponseSaga } from "../../../sagas/server/responses/updateUserDataResponse";
import { s_createDocumentResponseSaga } from "../../../sagas/server/responses/createDocumentResponse";
import { s_updateDocumentDataResponseSaga } from "../../../sagas/server/responses/updateDocumentDataResponse";
import { s_getDocumentListResponseSaga } from "../../../sagas/server/responses/getDocumentListResponse";
import { s_getScQueryDataResponseSaga } from "../../../sagas/server/responses/getScQueryDataResponse";
import { s_updateScQueryDataResponseSaga } from "../../../sagas/server/responses/updateScQueryDataResponse";

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
    it("should handle message C_GET_USER_LIST_REQUEST", () => {
      const clientId = 1;
      return (
        expectSaga(s_messageWatcher)
          .withState({
            server: {
              clients: [{ id: clientId, isLoggedIn: true }]
            }
          })
          // Provide a mock alternative for saga call
          .provide([[matchers.call.fn(s_getUserListResponseSaga), {}]])
          // Assert that a call effect will happen
          .call(s_getUserListResponseSaga, 1)
          // Dispatch any actions that the saga will `take`.
          .dispatch({
            type: actionTypes.S_MESSAGE,
            clientId,
            message: JSON.stringify({
              type: actionTypes.C_GET_USER_LIST_REQUEST
            })
          })
          // Start the test. Returns a Promise.
          .run()
      );
    });
    it("should handle message C_UPDATE_USER_DATA_REQUEST", () => {
      const clientId = 1;
      const userData = {};
      return (
        expectSaga(s_messageWatcher)
          .withState({
            server: {
              clients: [{ id: clientId, isLoggedIn: true }]
            }
          })
          // Provide a mock alternative for saga call
          .provide([[matchers.call.fn(s_updateUserDataResponseSaga), {}]])
          // Assert that a call effect will happen
          .call(s_updateUserDataResponseSaga, clientId, userData)
          // Dispatch any actions that the saga will `take`.
          .dispatch({
            type: actionTypes.S_MESSAGE,
            clientId,
            message: JSON.stringify({
              type: actionTypes.C_UPDATE_USER_DATA_REQUEST,
              userData: {}
            })
          })
          // Start the test. Returns a Promise.
          .run()
      );
    });
    it("should handle message C_CREATE_DOCUMENT_REQUEST", () => {
      const clientId = 1;
      const docData = {};
      return (
        expectSaga(s_messageWatcher)
          .withState({
            server: {
              clients: [{ id: clientId, isLoggedIn: true }]
            }
          })
          // Provide a mock alternative for saga call
          .provide([[matchers.call.fn(s_createDocumentResponseSaga), {}]])
          // Assert that a call effect will happen
          .call(s_createDocumentResponseSaga, clientId, docData)
          // Dispatch any actions that the saga will `take`.
          .dispatch({
            type: actionTypes.S_MESSAGE,
            clientId,
            message: JSON.stringify({
              type: actionTypes.C_CREATE_DOCUMENT_REQUEST,
              docData: {}
            })
          })
          // Start the test. Returns a Promise.
          .run()
      );
    });
    it("should handle message C_UPDATE_DOCUMENT_DATA_REQUEST", () => {
      const clientId = 1;
      const docId = 2;
      const docData = {};
      return (
        expectSaga(s_messageWatcher)
          .withState({
            server: {
              clients: [{ id: clientId, isLoggedIn: true }]
            }
          })
          // Provide a mock alternative for saga call
          .provide([[matchers.call.fn(s_updateDocumentDataResponseSaga), {}]])
          // Assert that a call effect will happen
          .call(s_updateDocumentDataResponseSaga, clientId, docId, docData)
          // Dispatch any actions that the saga will `take`.
          .dispatch({
            type: actionTypes.S_MESSAGE,
            clientId,
            message: JSON.stringify({
              type: actionTypes.C_UPDATE_DOCUMENT_DATA_REQUEST,
              docId,
              docData
            })
          })
          // Start the test. Returns a Promise.
          .run()
      );
    });
    it("should handle message C_GET_DOCUMENT_LIST_REQUEST", () => {
      const clientId = 1;
      return (
        expectSaga(s_messageWatcher)
          .withState({
            server: {
              clients: [{ id: clientId, isLoggedIn: true }]
            }
          })
          // Provide a mock alternative for saga call
          .provide([[matchers.call.fn(s_getDocumentListResponseSaga), {}]])
          // Assert that a call effect will happen
          .call(s_getDocumentListResponseSaga, clientId)
          // Dispatch any actions that the saga will `take`.
          .dispatch({
            type: actionTypes.S_MESSAGE,
            clientId,
            message: JSON.stringify({
              type: actionTypes.C_GET_DOCUMENT_LIST_REQUEST
            })
          })
          // Start the test. Returns a Promise.
          .run()
      );
    });
    it("should handle message C_GET_SC_QUERY_DATA_REQUEST", () => {
      const clientId = 1;
      const scqId = 1;
      return (
        expectSaga(s_messageWatcher)
          .withState({
            server: {
              clients: [{ id: clientId, isLoggedIn: true }]
            }
          })
          // Provide a mock alternative for saga call
          .provide([[matchers.call.fn(s_getScQueryDataResponseSaga), {}]])
          // Assert that a call effect will happen
          .call(s_getScQueryDataResponseSaga, clientId, scqId)
          // Dispatch any actions that the saga will `take`.
          .dispatch({
            type: actionTypes.S_MESSAGE,
            clientId,
            message: JSON.stringify({
              type: actionTypes.C_GET_SC_QUERY_DATA_REQUEST,
              scqId
            })
          })
          // Start the test. Returns a Promise.
          .run()
      );
    });
    it("should handle message C_UPDATE_SC_QUERY_DATA_REQUEST", () => {
      const clientId = 1;
      const scqId = 2;
      const scqData = {};
      return (
        expectSaga(s_messageWatcher)
          .withState({
            server: {
              clients: [{ id: clientId, isLoggedIn: true }]
            }
          })
          // Provide a mock alternative for saga call
          .provide([[matchers.call.fn(s_updateScQueryDataResponseSaga), {}]])
          // Assert that a call effect will happen
          .call(s_updateScQueryDataResponseSaga, clientId, scqId, scqData)
          // Dispatch any actions that the saga will `take`.
          .dispatch({
            type: actionTypes.S_MESSAGE,
            clientId,
            message: JSON.stringify({
              type: actionTypes.C_UPDATE_SC_QUERY_DATA_REQUEST,
              scqId,
              scqData
            })
          })
          // Start the test. Returns a Promise.
          .run()
      );
    });
  });
});
