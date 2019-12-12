import { actionTypes } from "../../actions/actionTypes";
import { put, select, takeLatest } from "redux-saga/effects";
import { c_updateUserDataRequest } from "../../actions/client/requests/updateUserDataRequest";
import { selectDocument } from "../../reducers/root";

export function* c_updateDocumentWatcher() {
  yield takeLatest(actionTypes.C_UPDATE_DOCUMENT, c_updateDocumentSaga);
}

export function* c_updateDocumentSaga({ docId, docData }) {
  const { myUserId, isLoggedIn } = yield select(state => state.wsclient);
  const document = yield select(state => selectDocument(state, docId));

  if (document) {
    // if client is logged in and the document to update is owned by the user:
    if (isLoggedIn && myUserId === document.userId) {
      yield put(c_updateUserDataRequest(docId, docData));
    }
  }
}
