import {takeLatest, put, race, take, delay} from "redux-saga/effects";
import { send } from '@giantmachines/redux-websocket';
import { actionTypes } from "../../../actions/actionTypes";
import {
  c_getScQueryDataError,
  c_getScQueryDataSuccess,
  c_getScQueryDataTimeout
} from "../../../actions/client/requests/getScQueryDataRequest";

export function* c_getScQueryDataRequestWatcher() {
  yield takeLatest(actionTypes.C_GET_SC_QUERY_DATA_REQUEST, c_getScQueryDataRequestSaga);
}

export function* c_getScQueryDataRequestSaga(action) {
  // Send request
  yield put(send(action));

  // start a race between sagas
  const { result, error, timeout } = yield race({
    result: take(actionTypes.S_GET_SC_QUERY_DATA_SUCCESS),
    error: take(actionTypes.S_GET_SC_QUERY_DATA_ERROR),
    timeout: delay(2000, `Request took too long to complete`)
  });

  if (result) {
    yield put(c_getScQueryDataSuccess(result.scqData, `supercollider query received`));
  } else if (error) {
    yield put(c_getScQueryDataError(error));
  } else if (timeout) {
    yield put(c_getScQueryDataTimeout(timeout));
  }
}
