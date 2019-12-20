import { expectSaga } from "redux-saga-test-plan";
import { c_createDocumentSuccessWatcher } from "../../../../sagas/client/requests/createDocumentSuccess";
import { actionTypes } from "../../../../actions/actionTypes";

describe("c_createDocumentSuccess saga", () => {
  it("should update my document id", () => {
    const oldDocId = 0;
    const docId = 1;
    const docData = { foo: "bar" };
    return expectSaga(c_createDocumentSuccessWatcher)
      .withState({
        client: {
          status: {
            myDocId: oldDocId
          }
        }
      })
      .put({
        type: actionTypes.C_UPDATE_DOCUMENT,
        docId: 0,
        docData: {
          id: docId,
          ...docData
        }
      })
      .put({
        type: actionTypes.C_UPDATE_MY_DOC_ID,
        docId
      })
      .dispatch({
        type: actionTypes.C_CREATE_SC_QUERY_SUCCESS,
        docId,
        docData
      })
      .run();
  });
  it("should request the document list", () => {
    return expectSaga(c_createDocumentSuccessWatcher)
      .withState({
        client: {
          status: {
            myDocId: 0
          }
        }
      })
      .put({ type: actionTypes.C_GET_DOCUMENT_LIST_REQUEST })
      .dispatch({
        type: actionTypes.C_CREATE_SC_QUERY_SUCCESS,
        docId: 1,
        docData: {}
      })
      .run();
  });
});
