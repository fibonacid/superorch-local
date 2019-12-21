import { actionTypes } from "../../../actions/actionTypes";
import { delay, put, race, take, takeLatest } from "redux-saga/effects";
import { send } from "@giantmachines/redux-websocket/dist";
import {
  c_getDocumentListError,
  c_getDocumentListRequest,
  c_getDocumentListSuccess,
  c_getDocumentListTimeout
} from "../../../actions/client/requests/getDocumentListRequest";

export function* c_getDocumentListRequestWatcher() {
  yield takeLatest(
    actionTypes.C_GET_DOCUMENT_LIST_REQUEST,
    c_getDocumentListRequestSaga
  );
}

export function* c_getDocumentListRequestSaga() {
  // Send request
  yield put(send(c_getDocumentListRequest()));

  // start a race between sagas
  const { result, error, timeout } = yield race({
    result: take(actionTypes.S_GET_DOCUMENT_LIST_SUCCESS),
    error: take(actionTypes.S_GET_DOCUMENT_LIST_ERROR),
    timeout: delay(2000, `Request took too long to complete`)
  });

  if (result) {
    yield put(
      c_getDocumentListSuccess(result.docList, `document list received`)
    );
  } else if (error) {
    yield put(c_getDocumentListError(error));
  } else if (timeout) {
    yield put(c_getDocumentListTimeout(timeout));
  }
}
