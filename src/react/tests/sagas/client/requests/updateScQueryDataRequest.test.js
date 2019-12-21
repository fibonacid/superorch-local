import { expectSaga } from "redux-saga-test-plan";
import { actionTypes } from "../../../../actions/actionTypes";
import {
  c_updateScQueryDataRequestSaga,
  c_updateScQueryDataRequestWatcher
} from "../../../../sagas/client/requests/updateScQueryDataRequest";

describe("c_updateScQueryDataRequest", () => {
  const action = {
    type: actionTypes.C_UPDATE_SC_QUERY_DATA_REQUEST,
    scqId: 0,
    scqData: {}
  };

  it("should send a request", () => {
    return (
      expectSaga(c_updateScQueryDataRequestWatcher)
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
      return (
        expectSaga(c_updateScQueryDataRequestSaga, action)
          // Assert that the `put` will eventually happen.
          .put.like({
            action: {
              type: actionTypes.C_UPDATE_SC_QUERY_DATA_SUCCESS
            }
          })
          // Dispatch any actions that the saga will `take`.
          .dispatch({
            type: actionTypes.S_UPDATE_SC_QUERY_DATA_SUCCESS,
            scqId: 1,
            scqData: {}
          })
          // Start the test. Returns a Promise.
          .run()
      );
    });
  });

  describe("when an error is received", () => {
    it("should dispatch an error action", () => {
      return (
        expectSaga(c_updateScQueryDataRequestSaga, action)
          // Assert that the `put` will eventually happen.
          .put.like({
            action: {
              type: actionTypes.C_UPDATE_SC_QUERY_DATA_ERROR,
              error: {}
            }
          })
          // Dispatch any actions that the saga will `take`.
          .dispatch({
            type: actionTypes.S_UPDATE_SC_QUERY_DATA_ERROR,
            error: {}
          })
          // Start the test. Returns a Promise.
          .run(500)
      );
    });
  });

  describe("when request takes too long to complete", () => {
    it("should dispatch a timeout action", () => {
      return (
        expectSaga(c_updateScQueryDataRequestSaga, action)
          // Assert that the `put` will eventually happen.
          .put.like({
            action: {
              type: actionTypes.C_UPDATE_SC_QUERY_DATA_TIMEOUT
            }
          })
          .delay(2500)
          // Start the test. Returns a Promise.
          .run(3000)
      );
    });
  });
});
