import { actionTypes } from "../../../actions/actionTypes";
import { takeLatest } from "redux-saga/effects";

export function* c_createDocumentRequestWatcher() {
  yield takeLatest(
    actionTypes.C_CREATE_DOCUMENT_REQUEST,
    c_createDocumentRequestSaga
  );
}

export function* c_createDocumentRequestSaga(action) {
  console.log("c_createDocumentRequestSaga", action);
}
