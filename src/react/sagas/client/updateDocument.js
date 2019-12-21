import { actionTypes } from "../../actions/actionTypes";
import { put, select, debounce } from "redux-saga/effects";
import { selectDocument } from "../../reducers/root";
import { c_updateDocumentDataRequest } from "../../actions/client/requests/updateDocumentDataRequest";

export function* c_updateDocumentWatcher() {
  yield debounce(50, actionTypes.C_UPDATE_DOCUMENT, c_updateDocumentSaga);
}

export function* c_updateDocumentSaga(action) {
  const { myDocId, isLoggedIn } = yield select(state => state.client.status);

  // if client is logged in and the document to update is owned by the user:
  if (isLoggedIn && myDocId === action.docId) {
    // send document update request.
    yield put(c_updateDocumentDataRequest(action.docId, action.docData));
  }
}
