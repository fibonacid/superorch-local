import { expectSaga } from "redux-saga-test-plan";
import { s_messageWatcher } from "../../../sagas/server/message";
import { actionTypes } from "../../../actions/actionTypes";

describe("s_messageWatcher", () => {
  it("should send an error when client is NOT logged in", () => {
    return (
      expectSaga(s_messageWatcher)
        .withState({
          server: {
            clients: [{ id: 100, isLoggedIn: false }]
          }
        })
        .put({
          type: actionTypes.S_TRANSMIT,
          clientId: 100,
          message: {
            type: actionTypes.S_MESSAGE_ERROR,
            error: {
              status: 400,
              message: `Log in is required`
            }
          }
        })
        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.S_MESSAGE,
          clientId: 100,
          message: JSON.stringify({
            type: "foo",
            message: "bar"
          })
        })
        // Start the test. Returns a Promise.
        .run()
    );
  });

  it.skip("should handle message C_LOGOUT_REQUEST", () => {});
  it.skip("should handle message C_GET_USER_LIST_REQUEST", () => {});
  it.skip("should handle message C_UPDATE_USER_DATA_REQUEST", () => {});
  it.skip("should handle message C_CREATE_DOCUMENT_REQUEST", () => {});
  it.skip("should handle message C_UPDATE_DOCUMENT_DATA_REQUEST", () => {});
  it.skip("should handle message C_GET_DOCUMENT_LIST_REQUEST", () => {});
  it.skip("should handle message C_GET_SC_QUERY_DATA_REQUEST", () => {});
  it.skip("should handle message C_UPDATE_SC_QUERY_DATA_REQUEST", () => {});
});
