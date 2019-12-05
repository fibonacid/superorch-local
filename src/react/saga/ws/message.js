import { actionTypes } from "../../actions/actionTypes";
import { takeLatest, put, call } from "redux-saga/effects";
import {
  wsCreateUserError,
  wsCreateUserSuccess
} from "../../actions/ws/createUser";
import { swapUserId } from "./swapUserId";

export function* wsMessageWatcher() {
  yield takeLatest(actionTypes.WS_MESSAGE, wsMessageSaga);
}

export function* wsMessageSaga({ payload }) {
  const message = JSON.parse(payload.message);
  switch (message.type) {
    case actionTypes.WS_CREATE_USER_SUCCESS:
      return yield call(swapUserId, message.userId);
    case actionTypes.WS_CREATE_USER_ERROR:
      return yield put(wsCreateUserError(message.error));
  }
}
