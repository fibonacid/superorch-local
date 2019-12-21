import { expectSaga } from "redux-saga-test-plan";
import { actionTypes } from "../../../../actions/actionTypes";
import { c_createScQueryRequestWatcher } from "../../../../sagas/client/requests/createScQueryRequest";
import { c_createScQueryRequestSaga } from "../../../../sagas/client/requests/createScQueryRequest";

describe("c_createScQueryRequest", () => {
  it("should send a request", () => {
    const action = {
      type: actionTypes.C_CREATE_SC_QUERY_REQUEST,
      scqData: {}
    };
    return (
      expectSaga(c_createScQueryRequestWatcher)
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
        type: actionTypes.C_CREATE_SC_QUERY_REQUEST,
        scqData: {}
      };
      return (
        expectSaga(c_createScQueryRequestSaga, action)
          // Assert that the `put` will eventually happen.
          .put.like({
            action: {
              type: actionTypes.C_CREATE_SC_QUERY_SUCCESS,
              scqId: 1,
              scqData: {}
            }
          })
          // Dispatch any actions that the saga will `take`.
          .dispatch({
            type: actionTypes.S_CREATE_SC_QUERY_SUCCESS,
            scqId: 1,
            scqData: {}
          })
          // Start the test. Returns a Promise.
          .run()
      );
    });
    it("should update the id of the original supercollider query", () => {
      const action = {
        type: actionTypes.C_CREATE_SC_QUERY_REQUEST,
        scqId: 1,
        scqData: {}
      };
      return (
        expectSaga(c_createScQueryRequestSaga, action)
          // Assert that the `put` will eventually happen.
          .put.like({
            action: {
              type: actionTypes.C_UPDATE_SC_QUERY,
              scqId: 1,
              scqData: { foo: "bar" }
            }
          })
          .put.like({
            action: {
              type: actionTypes.C_UPDATE_MY_SC_QUERY_ID,
              scqId: 1,
              newId: 100
            }
          })
          // Dispatch any actions that the saga will `take`.
          .dispatch({
            type: actionTypes.S_CREATE_SC_QUERY_SUCCESS,
            scqId: 100,
            scqData: { foo: "bar" }
          })
          // Start the test. Returns a Promise.
          .run()
      );
    });
  });

  describe("when an error is received", () => {
    it("should dispatch an error action", () => {
      const action = {
        type: actionTypes.C_CREATE_SC_QUERY_REQUEST,
        scqData: {}
      };
      return (
        expectSaga(c_createScQueryRequestSaga, action)
          // Assert that the `put` will eventually happen.
          .put.like({
            action: {
              type: actionTypes.C_CREATE_SC_QUERY_ERROR,
              error: {}
            }
          })
          // Dispatch any actions that the saga will `take`.
          .dispatch({
            type: actionTypes.S_CREATE_SC_QUERY_ERROR,
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
        type: actionTypes.C_CREATE_SC_QUERY_REQUEST,
        scqData: {}
      };
      return (
        expectSaga(c_createScQueryRequestSaga, action)
          // Assert that the `put` will eventually happen.
          .put.like({
            action: {
              type: actionTypes.C_CREATE_SC_QUERY_TIMEOUT
            }
          })
          .delay(2500)
          // Start the test. Returns a Promise.
          .run(3000)
      );
    });
  });
});
