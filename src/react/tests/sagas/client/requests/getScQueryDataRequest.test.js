import { expectSaga } from "redux-saga-test-plan";
import { actionTypes } from "../../../../actions/actionTypes";
import {
  c_getScQueryDataRequestSaga,
  c_getScQueryDataRequestWatcher
} from "../../../../sagas/client/requests/getScQueryDataRequest";

describe("c_getScQueryDataRequest saga", () => {
  it("should send a request", () => {
    const action = {
      type: actionTypes.C_GET_SC_QUERY_DATA_REQUEST
    };
    return (
      expectSaga(c_getScQueryDataRequestWatcher)
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
        type: actionTypes.C_GET_SC_QUERY_DATA_REQUEST
      };
      const scqData = { foo: "bar" };
      return (
        expectSaga(c_getScQueryDataRequestSaga, action)
          // Assert that the `put` will eventually happen.
          .put.like({
            action: {
              type: actionTypes.C_GET_SC_QUERY_DATA_SUCCESS,
              scqData
            }
          })
          // Dispatch any actions that the saga will `take`.
          .dispatch({
            type: actionTypes.S_GET_SC_QUERY_DATA_SUCCESS,
            scqData
          })
          // Start the test. Returns a Promise.
          .run()
      );
    });
  });

  describe("when an error is received", () => {
    it("should dispatch an error action", () => {
      const action = {
        type: actionTypes.C_GET_SC_QUERY_DATA_REQUEST
      };
      return (
        expectSaga(c_getScQueryDataRequestSaga, action)
          // Assert that the `put` will eventually happen.
          .put.like({
            action: {
              type: actionTypes.C_GET_SC_QUERY_DATA_ERROR,
              error: {}
            }
          })
          // Dispatch any actions that the saga will `take`.
          .dispatch({
            type: actionTypes.S_GET_SC_QUERY_DATA_ERROR,
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
        type: actionTypes.C_GET_SC_QUERY_DATA_REQUEST
      };
      return (
        expectSaga(c_getScQueryDataRequestSaga, action)
          // Assert that the `put` will eventually happen.
          .put.like({
            action: {
              type: actionTypes.C_GET_SC_QUERY_DATA_TIMEOUT
            }
          })
          .delay(2500)
          // Start the test. Returns a Promise.
          .run(3000)
      );
    });
  });
});
