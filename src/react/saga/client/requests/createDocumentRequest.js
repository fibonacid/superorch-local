import { actionTypes } from "../../../actions/actionTypes";
import { takeLatest, put, race, take, delay } from "redux-saga/effects";
import { send } from "@giantmachines/redux-websocket";
import {
  c_createDocumentError,
  c_createDocumentRequest,
  c_createDocumentSuccess,
  c_createDocumentTimeout
} from "../../../actions/client/requests/createDocumentRequest";
import {
  c_addMyDocId,
  c_removeMyDocId
} from "../../../actions/client/updateMyDocIds";

export function* c_createDocumentRequestWatcher() {
  yield takeLatest(
    actionTypes.C_CREATE_DOCUMENT_REQUEST,
    c_createDocumentRequestSaga
  );
}

export function* c_createDocumentRequestSaga(action) {
  // Send request
  yield put(send(c_createDocumentRequest(action.docData)));

  // start a race between sagas
  const { result, error, timeout } = yield race({
    result: take(actionTypes.S_CREATE_DOCUMENT_SUCCESS),
    error: take(actionTypes.S_CREATE_DOCUMENT_ERROR),
    timeout: delay(2000, `Request took too long to complete`)
  });

  if (result) {
    // Replace myDocId with new one:
    yield put(c_removeMyDocId(action.docData.id));
    yield put(c_addMyDocId(result.userId));

    // Send success message
    yield put(c_createDocumentSuccess(result.userId, `logged in`));
  } else if (error) {
    yield put(c_createDocumentError(error));
  } else if (timeout) {
    yield put(c_createDocumentTimeout(timeout));
  }
}
