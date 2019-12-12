import { actionTypes } from "../../actions/actionTypes";
import { takeLatest, put, select } from "redux-saga/effects";
import { selectDocument } from "../../reducers/root";
import { c_deleteDocumentRequest } from "../../actions/client/requests/deleteDocumentRequest";

export function* c_deleteDocumentWatcher() {
  yield takeLatest(actionTypes.C_DELETE_DOCUMENT, c_deleteDocumentSaga);
}

export function* c_deleteDocumentSaga(action) {
  const { myUserId, isLoggedIn } = yield select(state => state.wsclient);
  const document = yield select(state => selectDocument(state, action.docId));

  if (document) {
    // if client is logged in and the document to delete is owned by the user:
    if (isLoggedIn && myUserId === document.userId) {
      // send document update request.
      yield put(c_deleteDocumentRequest(action.docId));
    }
  }
}
