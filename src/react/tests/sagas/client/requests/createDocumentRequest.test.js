import { expectSaga } from "redux-saga-test-plan";
import { actionTypes } from "../../../../actions/actionTypes";
import { c_createDocumentRequestWatcher } from "../../../../sagas/client/requests/createDocumentRequest";

describe("c_createDocumentRequest", () => {
  it("should send a request", () => {
    const action = {
      type: actionTypes.C_CREATE_DOCUMENT_REQUEST,
      docData: {}
    };
    return (
      expectSaga(c_createDocumentRequestWatcher)
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
});
