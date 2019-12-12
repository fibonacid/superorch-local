import { actionTypes } from "../../../actions/actionTypes";
import { takeLatest } from "redux-saga/effects";

export function* c_createDocumentSuccessWatcher() {
  yield takeLatest(
    actionTypes.C_CREATE_DOCUMENT_SUCCESS,
    c_createDocumentSuccessSaga
  );
}

export function* c_createDocumentSuccessSaga(action) {
  console.log(action.message);
}
