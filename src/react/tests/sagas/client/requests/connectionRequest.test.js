import { expectSaga } from "redux-saga-test-plan";
import { actionTypes } from "../../../../actions/actionTypes";
import {
  c_connectionRequestSaga,
  c_connectionRequestWatcher
} from "../../../../sagas/client/requests/connectionRequest";
import { statusCodes } from "../../../../utils/constants";

describe("c_connectionRequest", () => {
  const url = "ws://test:8000";
  const password = "test";
  const action = {
    type: actionTypes.C_CONNECTION_REQUEST,
    url,
    password
  };

  it("should send a request to connect to the client", () => {
    return (
      expectSaga(c_connectionRequestWatcher)
        // Assert that the `put` will eventually happen.
        .put.like({
          action: {
            type: actionTypes.C_CONNECT,
            payload: { url }
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
      return (
        expectSaga(c_connectionRequestSaga, action)
          // Assert that the `put` will eventually happen.
          .put.like({
            action: {
              type: actionTypes.C_CONNECTION_SUCCESS
            }
          })
          // Dispatch any actions that the saga will `take`.
          .dispatch({
            type: actionTypes.S_CONNECTION_SUCCESS
          })
          // Start the test. Returns a Promise.
          .run()
      );
    });
  });

  describe("when an error is received", () => {
    it("should dispatch an error action", () => {
      const error = {
        status: 500,
        message: statusCodes[500]
      };
      return (
        expectSaga(c_connectionRequestSaga, action)
          // Assert that the `put` will eventually happen.
          .put.like({
            action: {
              type: actionTypes.C_CONNECTION_ERROR,
              error
            }
          })
          // Dispatch any actions that the saga will `take`.
          .dispatch({
            type: actionTypes.S_CONNECTION_ERROR,
            error
          })
          // Start the test. Returns a Promise.
          .run(500)
      );
    });
  });

  describe("when request takes too long to complete", () => {
    it("should dispatch a timeout action", () => {
      return (
        expectSaga(c_connectionRequestSaga, action)
          // Assert that the `put` will eventually happen.
          .put.like({
            action: {
              type: actionTypes.C_CONNECTION_TIMEOUT
            }
          })
          .delay(2500)
          // Start the test. Returns a Promise.
          .run(3000)
      );
    });
  });
});
