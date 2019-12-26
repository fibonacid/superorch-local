import { takeLatest, put } from "redux-saga/effects";
import { actionTypes } from "../../../actions/actionTypes";
import actions from "../../../actions";

const { replaceDocumentList } = actions;

export function* c_getDocumentListSuccessWatcher() {
  yield takeLatest(
    actionTypes.C_GET_DOCUMENT_LIST_SUCCESS,
    c_getDocumentListSuccessSaga
  );
}

export function* c_getDocumentListSuccessSaga(action) {
  yield put(replaceDocumentList(action.docList));
}
