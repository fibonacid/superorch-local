import { actionTypes } from "../../../actions/actionTypes";
import { delay, put, race, take, takeLatest } from "redux-saga/effects";
import { send } from "@giantmachines/redux-websocket/dist";
import {
  c_getUserListError,
  c_getUserListRequest,
  c_getUserListSuccess,
  c_getUserListTimeout
} from "../../../actions/client/requests/getUserListRequest";

export function* c_getUserListRequestWatcher() {
  yield takeLatest(
    actionTypes.C_GET_USER_LIST_REQUEST,
    c_getUserListRequestSaga
  );
}

export function* c_getUserListRequestSaga() {
  // Send request
  yield put(send(c_getUserListRequest()));

  // start a race between sagas
  const { result, error, timeout } = yield race({
    result: take(actionTypes.S_GET_USER_LIST_SUCCESS),
    error: take(actionTypes.S_GET_USER_LIST_ERROR),
    timeout: delay(2000, `Request took too long to complete`)
  });

  if (result) {
    yield put(c_getUserListSuccess(result.userList, `user list received`));
  } else if (error) {
    yield put(c_getUserListError(error));
  } else if (timeout) {
    yield put(c_getUserListTimeout(timeout));
  }
}
