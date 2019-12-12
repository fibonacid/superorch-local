import { actionTypes } from "../../../actions/actionTypes";
import { takeLatest } from "redux-saga/effects";
import {
  c_deleteDocumentRequest,
  c_deleteDocumentError,
  c_deleteDocumentSuccess,
  c_deleteDocumentTimeout
} from "../../../actions/client/requests/deleteDocumentRequest";

export function* c_deleteDocumentRequestWatcher() {
  yield takeLatest(
    actionTypes.C_DELETE_DOCUMENT_REQUEST,
    c_deleteDocumentRequestSaga
  );
}

export function* c_deleteDocumentRequestSaga(action) {
  console.log("c_deleteDocumentRequestSaga", action);

  // Send request
  yield put(send(c_deleteDocumentRequest(action.docId)));

  // start a race between sagas
  const { result, error, timeout } = yield race({
    result: take(actionTypes.S_DELETE_DOCUMENT_SUCCESS),
    error: take(actionTypes.S_DELETE_DOCUMENT_ERROR),
    timeout: delay(2000, `Request took too long to complete`)
  });

  if (result) {
    yield put(c_deleteDocumentSuccess(`document deleted`));
  } else if (error) {
    yield put(c_deleteDocumentError(error));
  } else if (timeout) {
    yield put(c_deleteDocumentTimeout(timeout));
  }
}
