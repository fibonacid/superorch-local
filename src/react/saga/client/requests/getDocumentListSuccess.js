import { actionTypes } from "../../../actions/actionTypes";
import { takeLatest, put } from "redux-saga/effects";
import { c_replaceDocumentList } from "../../../actions/client/crudDocuments";

export function* c_getDocumentListSuccessWatcher() {
  yield takeLatest(
    actionTypes.C_GET_DOCUMENT_LIST_SUCCESS,
    c_getDocumentListSuccessSaga
  );
}

export function* c_getDocumentListSuccessSaga(action) {
  yield put(c_replaceDocumentList(action.docList));
}
