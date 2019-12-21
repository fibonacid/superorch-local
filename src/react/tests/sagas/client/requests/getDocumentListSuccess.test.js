import { expectSaga } from "redux-saga-test-plan";
import { c_getDocumentListSuccessWatcher } from "../../../../sagas/client/requests/getDocumentListSuccess";
import { actionTypes } from "../../../../actions/actionTypes";

describe("c_getDocumentListSuccess saga", () => {
  it("should replace the document list", () => {
    const docList = [{}, {}, {}, {}];
    return expectSaga(c_getDocumentListSuccessWatcher)
      .put({
        type: actionTypes.C_REPLACE_DOCUMENT_LIST,
        docList
      })
      .dispatch({
        type: actionTypes.C_GET_DOCUMENT_LIST_SUCCESS,
        docList
      })
      .run();
  });
});
