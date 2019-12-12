import { actionTypes } from "../../../actions/actionTypes";
import { takeLatest, put, select, race, take, delay } from "redux-saga/effects";
import { send } from "@giantmachines/redux-websocket";
import {
  c_logoutError,
  c_logoutRequest,
  c_logoutSuccess,
  c_logoutTimeout
} from "../../../actions/client/requests/logoutRequest";

export function* c_logoutRequestWatcher() {
  yield takeLatest(actionTypes.C_LOGOUT_REQUEST, c_logoutRequestSaga);
}

export function* c_logoutRequestSaga() {
  const { myUserId } = yield select(state => state.client);

  // Send request
  yield put(send(c_logoutRequest(myUserId)));

  // start a race between sagas
  const { result, error, timeout } = yield race({
    result: take(actionTypes.S_LOGOUT_SUCCESS),
    error: take(actionTypes.S_LOGOUT_ERROR),
    timeout: delay(2000, `Request took too long to complete`)
  });

  if (result) {
    yield put(c_logoutSuccess(`logged out`));
  } else if (error) {
    yield put(c_logoutError(error));
  } else if (timeout) {
    yield put(c_logoutTimeout(timeout));
  }
}
