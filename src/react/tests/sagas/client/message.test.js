import { c_messageWatcher } from "../../../sagas/client/message";
import { actionTypes } from "../../../actions/actionTypes";
import { expectSaga } from "redux-saga-test-plan";
import { statusCodes } from "../../../utils/constants";

describe("c_messageWatcher", () => {
  it("should handle message S_LOGIN_SUCCESS", () => {
    return (
      expectSaga(c_messageWatcher)
        .put({
          type: actionTypes.S_LOGIN_SUCCESS,
          userId: 2
        })
        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.C_MESSAGE,
          payload: {
            message: JSON.stringify({
              type: actionTypes.S_LOGIN_SUCCESS,
              userId: 2
            })
          }
        })
        // Start the test. Returns a Promise.
        .run()
    );
  });
  it("should handle message S_LOGIN_ERROR", () => {
    const error = { status: 500, message: statusCodes[500] };
    return (
      expectSaga(c_messageWatcher)
        .put({
          type: actionTypes.S_LOGIN_ERROR,
          error
        })
        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.C_MESSAGE,
          payload: {
            message: JSON.stringify({
              type: actionTypes.S_LOGIN_ERROR,
              error
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
          type: actionTypes.S_LOGOUT_SUCCESS,
          userId: 0
        })
        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.C_MESSAGE,
          payload: {
            message: JSON.stringify({
              type: actionTypes.S_LOGOUT_SUCCESS,
              userId: 0
            })
          }
        })
        // Start the test. Returns a Promise.
        .run()
    );
  });
  it("should handle message S_LOGOUT_ERROR", () => {
    const error = { status: 500, message: statusCodes[500] };
    return (
      expectSaga(c_messageWatcher)
        .put({
          type: actionTypes.S_LOGOUT_ERROR,
          error
        })
        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.C_MESSAGE,
          payload: {
            message: JSON.stringify({
              type: actionTypes.S_LOGOUT_ERROR,
              error
            })
          }
        })
        // Start the test. Returns a Promise.
        .run()
    );
  });
});
