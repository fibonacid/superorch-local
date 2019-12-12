import { actionTypes } from "../../actions/actionTypes";
import { takeLatest, put, select } from "redux-saga/effects";
import { c_deleteDocumentRequest } from "../../actions/client/requests/deleteDocumentRequest";

export function* c_deleteDocumentWatcher() {
  yield takeLatest(actionTypes.C_DELETE_DOCUMENT, c_deleteDocumentSaga);
}

export function* c_deleteDocumentSaga(action) {
  const { myDocIds, isLoggedIn } = yield select(state => state.wsclient);

  // if client is logged in and the document to delete is owned by the user:
  if (isLoggedIn && myDocIds.includes(action.docId)) {
    // send document update request.
    yield put(c_deleteDocumentRequest(action.docId));
  }
}
