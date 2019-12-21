import { expectSaga } from "redux-saga-test-plan";
import { actionTypes } from "../../../../actions/actionTypes";
import {
  c_loginRequestSaga,
  c_loginRequestWatcher
} from "../../../../sagas/client/requests/loginRequest";

describe("c_loginRequest", () => {
  const myUserId = 0;
  const userData = {
    id: myUserId,
    foo: "bar"
  };
  const state = {
    client: {
      users: [userData],
      status: {
        myUserId
      }
    }
  };

  it("should send a request", () => {
    const action = {
      type: actionTypes.C_LOGIN_REQUEST
    };
    return (
      expectSaga(c_loginRequestWatcher)
        .withState(state)
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
        type: actionTypes.C_LOGIN_REQUEST,
        userData: {}
      };
      const userId = 1;
      return (
        expectSaga(c_loginRequestSaga, action)
          .withState(state)
          // Assert that the `put` will eventually happen.
          .put.like({
            action: {
              type: actionTypes.C_LOGIN_SUCCESS,
              userId
            }
          })
          // Dispatch any actions that the saga will `take`.
          .dispatch({
            type: actionTypes.S_LOGIN_SUCCESS,
            userId
          })
          // Start the test. Returns a Promise.
          .run()
      );
    });
  });

  describe("when an error is received", () => {
    it("should dispatch an error action", () => {
      const action = {
        type: actionTypes.C_LOGIN_REQUEST,
        userData: {}
      };
      return (
        expectSaga(c_loginRequestSaga, action)
          .withState(state)
          // Assert that the `put` will eventually happen.
          .put.like({
            action: {
              type: actionTypes.C_LOGIN_ERROR,
              error: {}
            }
          })
          // Dispatch any actions that the saga will `take`.
          .dispatch({
            type: actionTypes.S_LOGIN_ERROR,
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
        type: actionTypes.C_LOGIN_REQUEST,
        userData: {}
      };
      return (
        expectSaga(c_loginRequestSaga, action)
          .withState(state)
          // Assert that the `put` will eventually happen.
          .put.like({
            action: {
              type: actionTypes.C_LOGIN_TIMEOUT
            }
          })
          .delay(2500)
          // Start the test. Returns a Promise.
          .run(3000)
      );
    });
  });
});
