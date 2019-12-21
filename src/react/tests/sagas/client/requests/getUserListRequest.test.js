import { expectSaga } from "redux-saga-test-plan";
import { actionTypes } from "../../../../actions/actionTypes";
import {
  c_getUserListRequestSaga,
  c_getUserListRequestWatcher
} from "../../../../sagas/client/requests/getUserListRequest";

describe("c_getUserListRequest saga", () => {
  it("should send a request", () => {
    const action = {
      type: actionTypes.C_GET_USER_LIST_REQUEST
    };
    return (
      expectSaga(c_getUserListRequestWatcher)
        // Assert that the `put` will eventually happen.
        .put.like({
          action: {
            type: actionTypes.C_SEND,
            payload: action
          }
        })
        // Dispatch any actions that the saga will `take`.
        .dispatch(action)
        // Start the test. Returns a Promise.
        .run()
    );
  });

  describe("when a result is received", () => {
    it("should dispatch a success action", () => {
      const action = {
        type: actionTypes.C_GET_USER_LIST_REQUEST
      };
      const userList = [{}, {}, {}, {}];
      return (
        expectSaga(c_getUserListRequestSaga, action)
          // Assert that the `put` will eventually happen.
          .put.like({
            action: {
              type: actionTypes.C_GET_USER_LIST_SUCCESS,
              userList
            }
          })
          // Dispatch any actions that the saga will `take`.
          .dispatch({
            type: actionTypes.S_GET_USER_LIST_SUCCESS,
            userList
          })
          // Start the test. Returns a Promise.
          .run()
      );
    });
  });

  describe("when an error is received", () => {
    it("should dispatch an error action", () => {
      const action = {
        type: actionTypes.C_GET_USER_LIST_REQUEST
      };
      return (
        expectSaga(c_getUserListRequestSaga, action)
          // Assert that the `put` will eventually happen.
          .put.like({
            action: {
              type: actionTypes.C_GET_USER_LIST_ERROR,
              error: {}
            }
          })
          // Dispatch any actions that the saga will `take`.
          .dispatch({
            type: actionTypes.S_GET_USER_LIST_ERROR,
            error: {}
          })
          // Start the test. Returns a Promise.
          .run(500)
      );
    });
  });

  describe("when request takes too long to complete", () => {
    it("should dispatch a timeout action", () => {
      const action = {
        type: actionTypes.C_GET_USER_LIST_REQUEST
      };
      return (
        expectSaga(c_getUserListRequestSaga, action)
          // Assert that the `put` will eventually happen.
          .put.like({
            action: {
              type: actionTypes.C_GET_USER_LIST_TIMEOUT
            }
          })
          .delay(2500)
          // Start the test. Returns a Promise.
          .run(3000)
      );
    });
  });
});
