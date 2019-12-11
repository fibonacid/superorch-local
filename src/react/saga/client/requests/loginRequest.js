import { actionTypes } from "../../../actions/actionTypes";
import { takeLatest, put, select, race, take, delay } from "redux-saga/effects";
import { send } from "@giantmachines/redux-websocket";
import { selectUser } from "../../../reducers/root";
import {
  c_loginError,
  c_loginSuccess,
  c_loginTimeout
} from "../../../actions/client/requests/loginRequest";

export function* c_loginRequestWatcher() {
  yield takeLatest(actionTypes.C_LOGIN_REQUEST, c_loginRequestSaga);
}

export function* c_loginRequestSaga(action) {
  const { myUserId } = yield select(state => state.wsclient);
  const userData = yield select(state => selectUser(state, myUserId));

  const message = {
    ...action,
    userData
  };

  // Send request
  yield put(send(message));

  // start a race between sagas
  const { result, error, timeout } = yield race({
    result: take(actionTypes.S_LOGIN_SUCCESS),
    error: take(actionTypes.S_LOGIN_ERROR),
    timeout: delay(2000, `Request took too long to complete`)
  });

  if (result) {
    yield put(c_loginSuccess(result.userId, `logged in`));
  } else if (error) {
    yield put(c_loginError(error));
  } else if (timeout) {
    yield put(c_loginTimeout(timeout));
  }
}
