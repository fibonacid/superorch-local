import { c_messageWatcher } from "../../../sagas/client/message";
import { actionTypes } from "../../../actions/actionTypes";
import { expectSaga } from "redux-saga-test-plan";

describe("c_messageWatcher", () => {
  it("should handle message S_LOGIN_SUCCESS", () => {
    return (
      expectSaga(c_messageWatcher)
        .put({
          type: actionTypes.S_LOGIN_SUCCESS
        })
        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.C_MESSAGE,
          payload: {
            message: JSON.stringify({
              type: actionTypes.S_LOGIN_SUCCESS
            })
          }
        })
        // Start the test. Returns a Promise.
        .run()
    );
  });
  it("should handle message S_LOGIN_ERROR", () => {
    return (
      expectSaga(c_messageWatcher)
        .put({
          type: actionTypes.S_LOGIN_ERROR
        })
        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.C_MESSAGE,
          payload: {
            message: JSON.stringify({
              type: actionTypes.S_LOGIN_ERROR
            })
          }
        })
        // Start the test. Returns a Promise.
        .run()
    );
  });
  it("should handle message S_LOGOUT_SUCCESS", () => {
    return (
      expectSaga(c_messageWatcher)
        .put({
          type: actionTypes.S_LOGOUT_SUCCESS
        })
        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.C_MESSAGE,
          payload: {
            message: JSON.stringify({
              type: actionTypes.S_LOGOUT_SUCCESS
            })
          }
        })
        // Start the test. Returns a Promise.
        .run()
    );
  });
  it("should handle message S_LOGOUT_ERROR", () => {
    return (
      expectSaga(c_messageWatcher)
        .put({
          type: actionTypes.S_LOGOUT_ERROR
        })
        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.C_MESSAGE,
          payload: {
            message: JSON.stringify({
              type: actionTypes.S_LOGOUT_ERROR
            })
          }
        })
        // Start the test. Returns a Promise.
        .run()
    );
  });
  it("should handle message S_GET_USER_LIST_SUCCESS", () => {
    return (
      expectSaga(c_messageWatcher)
        .put({
          type: actionTypes.S_GET_USER_LIST_SUCCESS
        })
        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.C_MESSAGE,
          payload: {
            message: JSON.stringify({
              type: actionTypes.S_GET_USER_LIST_SUCCESS
            })
          }
        })
        // Start the test. Returns a Promise.
        .run()
    );
  });
  it("should handle message S_GET_USER_LIST_ERROR", () => {
    return (
      expectSaga(c_messageWatcher)
        .put({
          type: actionTypes.S_GET_USER_LIST_ERROR
        })
        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.C_MESSAGE,
          payload: {
            message: JSON.stringify({
              type: actionTypes.S_GET_USER_LIST_ERROR
            })
          }
        })
        // Start the test. Returns a Promise.
        .run()
    );
  });
  it("should handle message S_UPDATE_USER_DATA_SUCCESS", () => {
    return (
      expectSaga(c_messageWatcher)
        .put({
          type: actionTypes.S_UPDATE_USER_DATA_SUCCESS
        })
        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.C_MESSAGE,
          payload: {
            message: JSON.stringify({
              type: actionTypes.S_UPDATE_USER_DATA_SUCCESS
            })
          }
        })
        // Start the test. Returns a Promise.
        .run()
    );
  });
  it("should handle message S_UPDATE_USER_DATA_ERROR", () => {
    return (
      expectSaga(c_messageWatcher)
        .put({
          type: actionTypes.S_UPDATE_USER_DATA_ERROR
        })
        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.C_MESSAGE,
          payload: {
            message: JSON.stringify({
              type: actionTypes.S_UPDATE_USER_DATA_ERROR
            })
          }
        })
        // Start the test. Returns a Promise.
        .run()
    );
  });
  it("should handle message S_GET_DOCUMENT_LIST_SUCCESS", () => {
    return (
      expectSaga(c_messageWatcher)
        .put({
          type: actionTypes.S_GET_DOCUMENT_LIST_SUCCESS
        })
        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.C_MESSAGE,
          payload: {
            message: JSON.stringify({
              type: actionTypes.S_GET_DOCUMENT_LIST_SUCCESS
            })
          }
        })
        // Start the test. Returns a Promise.
        .run()
    );
  });
  it("should handle message S_GET_DOCUMENT_LIST_ERROR", () => {
    return (
      expectSaga(c_messageWatcher)
        .put({
          type: actionTypes.S_GET_DOCUMENT_LIST_ERROR
        })
        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.C_MESSAGE,
          payload: {
            message: JSON.stringify({
              type: actionTypes.S_GET_DOCUMENT_LIST_ERROR
            })
          }
        })
        // Start the test. Returns a Promise.
        .run()
    );
  });
  it("should handle message S_CREATE_SC_QUERY_SUCCESS", () => {
    return (
      expectSaga(c_messageWatcher)
        .put({
          type: actionTypes.S_GET_DOCUMENT_LIST_SUCCESS
        })
        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.C_MESSAGE,
          payload: {
            message: JSON.stringify({
              type: actionTypes.S_GET_DOCUMENT_LIST_SUCCESS
            })
          }
        })
        // Start the test. Returns a Promise.
        .run()
    );
  });
  it("should handle message S_CREATE_SC_QUERY_ERROR", () => {
    return (
      expectSaga(c_messageWatcher)
        .put({
          type: actionTypes.S_CREATE_SC_QUERY_ERROR
        })
        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.C_MESSAGE,
          payload: {
            message: JSON.stringify({
              type: actionTypes.S_CREATE_SC_QUERY_ERROR
            })
          }
        })
        // Start the test. Returns a Promise.
        .run()
    );
  });
  it("should handle message S_UPDATE_SC_QUERY_DATA_SUCCESS", () => {
    return (
      expectSaga(c_messageWatcher)
        .put({
          type: actionTypes.S_UPDATE_SC_QUERY_DATA_SUCCESS
        })
        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.C_MESSAGE,
          payload: {
            message: JSON.stringify({
              type: actionTypes.S_UPDATE_SC_QUERY_DATA_SUCCESS
            })
          }
        })
        // Start the test. Returns a Promise.
        .run()
    );
  });
  it("should handle message S_UPDATE_SC_QUERY_DATA_ERROR", () => {
    return (
      expectSaga(c_messageWatcher)
        .put({
          type: actionTypes.S_UPDATE_SC_QUERY_DATA_ERROR
        })
        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.C_MESSAGE,
          payload: {
            message: JSON.stringify({
              type: actionTypes.S_UPDATE_SC_QUERY_DATA_ERROR
            })
          }
        })
        // Start the test. Returns a Promise.
        .run()
    );
  });
  it("should handle message S_GET_SC_QUERY_DATA_SUCCESS", () => {
    return (
      expectSaga(c_messageWatcher)
        .put({
          type: actionTypes.S_GET_SC_QUERY_DATA_SUCCESS
        })
        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.C_MESSAGE,
          payload: {
            message: JSON.stringify({
              type: actionTypes.S_GET_SC_QUERY_DATA_SUCCESS
            })
          }
        })
        // Start the test. Returns a Promise.
        .run()
    );
  });
  it("should handle message S_GET_SC_QUERY_DATA_ERROR", () => {
    return (
      expectSaga(c_messageWatcher)
        .put({
          type: actionTypes.S_GET_SC_QUERY_DATA_ERROR
        })
        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.C_MESSAGE,
          payload: {
            message: JSON.stringify({
              type: actionTypes.S_GET_SC_QUERY_DATA_ERROR
            })
          }
        })
        // Start the test. Returns a Promise.
        .run()
    );
  });
  it("should handle message B_USER_JOINED", () => {
    return (
      expectSaga(c_messageWatcher)
        .put({
          type: actionTypes.B_USER_JOINED
        })
        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.C_MESSAGE,
          payload: {
            message: JSON.stringify({
              type: actionTypes.B_USER_JOINED
            })
          }
        })
        // Start the test. Returns a Promise.
        .run()
    );
  });
  it("should handle message B_USER_UPDATE", () => {
    return (
      expectSaga(c_messageWatcher)
        .put({
          type: actionTypes.B_USER_UPDATE
        })
        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.C_MESSAGE,
          payload: {
            message: JSON.stringify({
              type: actionTypes.B_USER_UPDATE
            })
          }
        })
        // Start the test. Returns a Promise.
        .run()
    );
  });
  it("should handle message B_USER_LEFT", () => {
    return (
      expectSaga(c_messageWatcher)
        .put({
          type: actionTypes.B_USER_LEFT
        })
        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.C_MESSAGE,
          payload: {
            message: JSON.stringify({
              type: actionTypes.B_USER_LEFT
            })
          }
        })
        // Start the test. Returns a Promise.
        .run()
    );
  });
  it("should handle message B_DOCUMENT_CREATED", () => {
    return (
      expectSaga(c_messageWatcher)
        .put({
          type: actionTypes.B_DOCUMENT_CREATED
        })
        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.C_MESSAGE,
          payload: {
            message: JSON.stringify({
              type: actionTypes.B_DOCUMENT_CREATED
            })
          }
        })
        // Start the test. Returns a Promise.
        .run()
    );
  });
  it("should handle message B_DOCUMENT_UPDATE", () => {
    return (
      expectSaga(c_messageWatcher)
        .put({
          type: actionTypes.B_DOCUMENT_UPDATE
        })
        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.C_MESSAGE,
          payload: {
            message: JSON.stringify({
              type: actionTypes.B_DOCUMENT_UPDATE
            })
          }
        })
        // Start the test. Returns a Promise.
        .run()
    );
  });
  it("should handle message B_SC_QUERY_CREATED", () => {
    return (
      expectSaga(c_messageWatcher)
        .put({
          type: actionTypes.B_SC_QUERY_CREATED
        })
        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.C_MESSAGE,
          payload: {
            message: JSON.stringify({
              type: actionTypes.B_SC_QUERY_CREATED
            })
          }
        })
        // Start the test. Returns a Promise.
        .run()
    );
  });
  it("should handle message B_SC_QUERY_UPDATE", () => {
    return (
      expectSaga(c_messageWatcher)
        .put({
          type: actionTypes.B_SC_QUERY_UPDATE
        })
        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.C_MESSAGE,
          payload: {
            message: JSON.stringify({
              type: actionTypes.B_SC_QUERY_UPDATE
            })
          }
        })
        // Start the test. Returns a Promise.
        .run()
    );
  });
});
