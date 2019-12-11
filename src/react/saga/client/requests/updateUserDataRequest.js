import { actionTypes } from "../../../actions/actionTypes";
import { takeLatest, put, race, delay, take } from "redux-saga/effects";
import { send } from "@giantmachines/redux-websocket";
import {
  c_updateUserDataError,
  c_updateUserDataRequest,
  c_updateUserDataSuccess,
  c_updateUserDataTimeout
} from "../../../actions/client/requests/updateUserDataRequest";

export function* c_updateUserDataRequestWatcher() {
  yield takeLatest(
    actionTypes.C_UPDATE_USER_DATA_REQUEST,
    c_updateUserDataRequestSaga
  );
}

export function* c_updateUserDataRequestSaga(action) {
  // Send request:
  yield put(send(c_updateUserDataRequest(action.userData)));

  // start a race between sagas
  const { result, error, timeout } = yield race({
    result: take(actionTypes.S_UPDATE_USER_DATA_SUCCESS),
    error: take(actionTypes.S_UPDATE_USER_DATA_ERROR),
    timeout: delay(2000, `Request took too long to complete`)
  });

  if (result) {
    yield put(c_updateUserDataSuccess(`user updated`));
  } else if (error) {
    yield put(c_updateUserDataError(error));
  } else if (timeout) {
    yield put(c_updateUserDataTimeout(timeout));
  }
}
