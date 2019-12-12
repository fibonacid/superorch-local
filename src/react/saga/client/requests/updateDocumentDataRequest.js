import { actionTypes } from "../../../actions/actionTypes";
import { takeLatest, put, race, take, delay } from "redux-saga/effects";
import { send } from "@giantmachines/redux-websocket";
import {
  c_updateDocumentDataError,
  c_updateDocumentDataRequest,
  c_updateDocumentDataSuccess,
  c_updateDocumentDataTimeout
} from "../../../actions/client/requests/updateDocumentDataRequest";
import { c_updateDocument } from "../../../actions/client/crudDocuments";

export function* c_updateDocumentDataRequestWatcher() {
  yield takeLatest(
    actionTypes.C_UPDATE_DOCUMENT_DATA_REQUEST,
    c_updateDocumentDataRequestSaga
  );
}

export function* c_updateDocumentDataRequestSaga(action) {
  // Send request
  yield put(send(c_updateDocumentDataRequest(action.docData)));

  // start a race between sagas
  const { result, error, timeout } = yield race({
    result: take(actionTypes.S_UPDATE_DOCUMENT_DATA_SUCCESS),
    error: take(actionTypes.S_UPDATE_DOCUMENT_DATA_ERROR),
    timeout: delay(2000, `Request took too long to complete`)
  });

  if (result) {
    // Update document data
    yield put(c_updateDocument(result.docId, result.docData));

    // Send success message
    yield put(c_updateDocumentDataSuccess(result.docId, `document updated`));
  } else if (error) {
    yield put(c_updateDocumentDataError(error));
  } else if (timeout) {
    yield put(c_updateDocumentDataTimeout(timeout));
  }
}
