import { expectSaga } from "redux-saga-test-plan";
import { actionTypes } from "../../../../actions/actionTypes";
import {
  c_getDocumentListRequestSaga,
  c_getDocumentListRequestWatcher
} from "../../../../sagas/client/requests/getDocumentListRequest";

describe("c_getDocumentListRequest saga", () => {
  it("should send a request", () => {
    const action = {
      type: actionTypes.C_GET_DOCUMENT_LIST_REQUEST
    };
    return (
      expectSaga(c_getDocumentListRequestWatcher)
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
        type: actionTypes.C_GET_DOCUMENT_LIST_REQUEST
      };
      const docList = [{}, {}, {}, {}];
      return (
        expectSaga(c_getDocumentListRequestSaga, action)
          // Assert that the `put` will eventually happen.
          .put.like({
            action: {
              type: actionTypes.C_GET_DOCUMENT_LIST_SUCCESS,
              docList
            }
          })
          // Dispatch any actions that the saga will `take`.
          .dispatch({
            type: actionTypes.S_GET_DOCUMENT_LIST_SUCCESS,
            docList
          })
          // Start the test. Returns a Promise.
          .run()
      );
    });
  });

  describe("when an error is received", () => {
    it("should dispatch an error action", () => {
      const action = {
        type: actionTypes.C_GET_DOCUMENT_LIST_REQUEST
      };
      return (
        expectSaga(c_getDocumentListRequestSaga, action)
          // Assert that the `put` will eventually happen.
          .put.like({
            action: {
              type: actionTypes.C_GET_DOCUMENT_LIST_ERROR,
              error: {}
            }
          })
          // Dispatch any actions that the saga will `take`.
          .dispatch({
            type: actionTypes.S_GET_DOCUMENT_LIST_ERROR,
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
        type: actionTypes.C_GET_DOCUMENT_LIST_REQUEST
      };
      return (
        expectSaga(c_getDocumentListRequestSaga, action)
          // Assert that the `put` will eventually happen.
          .put.like({
            action: {
              type: actionTypes.C_GET_DOCUMENT_LIST_TIMEOUT
            }
          })
          .delay(2500)
          // Start the test. Returns a Promise.
          .run(3000)
      );
    });
  });
});
