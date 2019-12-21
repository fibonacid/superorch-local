import { expectSaga } from "redux-saga-test-plan";
import { c_updateDocumentWatcher } from "../../../sagas/client/updateDocument";
import { actionTypes } from "../../../actions/actionTypes";

describe("c_updateDocumentWatcher", () => {
  it("should dispatch a request when required conditions are met", () => {
    return (
      expectSaga(c_updateDocumentWatcher)
        .withState({
          client: {
            status: {
              myDocId: 0,
              isLoggedIn: true
            }
          }
        })

        // Assert that the `put` will eventually happen.
        .put({
          type: actionTypes.C_UPDATE_DOCUMENT_DATA_REQUEST,
          docId: 0,
          docData: { foo: "bar" }
        })

        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.C_UPDATE_DOCUMENT,
          docId: 0,
          docData: { foo: "bar" }
        })

        // Start the test. Returns a Promise.
        .run()
    );
  });

  it("should NOT dispatch a request when client isn't logged in", () => {
    return (
      expectSaga(c_updateDocumentWatcher)
        .withState({
          client: {
            status: {
              myDocId: 0,
              isLoggedIn: false
            }
          }
        })

        // Assert that the `put` will eventually happen.
        .not.put({
          type: actionTypes.C_UPDATE_DOCUMENT_DATA_REQUEST,
          docId: 0,
          docData: { foo: "bar" }
        })

        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.C_UPDATE_DOCUMENT,
          docId: 0,
          docData: { foo: "bar" }
        })

        // Start the test. Returns a Promise.
        .run()
    );
  });

  it("should NOT dispatch a request when document isn't owned by the client user", () => {
    return (
      expectSaga(c_updateDocumentWatcher)
        .withState({
          client: {
            status: {
              myDocId: 1,
              isLoggedIn: false
            }
          }
        })

        // Assert that the `put` will eventually happen.
        .not.put({
          type: actionTypes.C_UPDATE_DOCUMENT_DATA_REQUEST,
          docId: 0,
          docData: { foo: "bar" }
        })

        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: actionTypes.C_UPDATE_DOCUMENT,
          docId: 0,
          docData: { foo: "bar" }
        })

        // Start the test. Returns a Promise.
        .run()
    );
  });
});
