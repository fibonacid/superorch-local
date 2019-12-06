import { actionTypes } from "../../actions/actionTypes";
import { takeLatest, put, race, take, delay, select } from "redux-saga/effects";
import { send } from "@giantmachines/redux-websocket";
import { wsCreateDocument } from "../../actions/ws/createDocument";
import { updateDocument } from "../../actions/updateDocument";

export function* wsCreateDocumentWatcher() {
  yield takeLatest(actionTypes.WS_CREATE_DOCUMENT, wsCreateDocumentSaga);
}

export function* wsCreateDocumentSaga(action) {
  const document = yield select(state => state.document);

  // If document is undefined
  if (!document) {
    // Exit immediately
    return null;
  }

  // Request a new document list
  yield put(send(wsCreateDocument(action.document)));

  // Wait for an error or success message
  const { result, error, timeout } = yield race({
    result: take(actionTypes.WS_CREATE_DOCUMENT_SUCCESS),
    error: take(actionTypes.WS_CREATE_DOCUMENT_ERROR),
    timeout: delay(2000, `Request took too long to complete`)
  });

  // If request completed successfully:
  if (result) {
    // Swap it with new one:
    // Update the document record with new id.
    yield put(updateDocument({ id: result.documentId }));
  }
  // If request raised an error on the server:
  else if (error) {
    console.error(error);
  }
  // If request took to long to complete
  else if (timeout) {
    console.log(timeout);
  }
}
