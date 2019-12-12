import { actionTypes } from "../../../actions/actionTypes";
import { takeLatest } from "redux-saga/effects";

export function* c_updateDocumentDataSuccessWatcher() {
  yield takeLatest(
    actionTypes.C_UPDATE_DOCUMENT_DATA_SUCCESS,
    c_updateDocumentDataSuccessSaga
  );
}

export function* c_updateDocumentDataSuccessSaga(action) {
  console.log("document updated");
}
