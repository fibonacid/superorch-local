import { actionTypes } from "../../../actions/actionTypes";
import { takeLatest, put, race, take, delay, select } from "redux-saga/effects";
import { send } from "@giantmachines/redux-websocket";
import {
  c_createDocumentError,
  c_createDocumentRequest,
  c_createDocumentSuccess,
  c_createDocumentTimeout
} from "../../../actions/client/requests/createDocumentRequest";
import { c_updateMyDocId } from "../../../actions/client/updateMyDocId";
import { c_updateDocument } from "../../../actions/client/crudDocuments";
import { c_getDocumentListRequest } from "../../../actions/client/requests/getDocumentListRequest";

/**
 *
 * @returns {IterableIterator<ForkEffect>}
 */
export function* c_createDocumentRequestWatcher() {
  yield takeLatest(
    actionTypes.C_CREATE_DOCUMENT_REQUEST,
    c_createDocumentRequestSaga
  );
}

/**
 *
 * @param action
 * @returns {IterableIterator<PutEffect<{type: *, message: *}>|PutEffect<BuiltAction<any>>|PutEffect<{docId, type}>|PutEffect<{type: *, error: *}>|PutEffect<{docId: *, type: *, message: *}>|PutEffect<{docId: *, type: *, docData: *}>|RaceEffect<<"TAKE", TakeEffectDescriptor> | <"CALL", CallEffectDescriptor>>>}
 */
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
    yield put(c_createDocumentSuccess(result.docId, result.docData));
  } else if (error) {
    yield put(c_createDocumentError(error));
  } else if (timeout) {
    yield put(c_createDocumentTimeout(timeout));
  }
}
