import { actionTypes } from "../../actions/actionTypes";
import { takeLatest, put } from "redux-saga/effects";
import {
  s_loginError,
  s_loginSuccess
} from "../../actions/server/responses/loginResponse";
import { b_userJoined } from "../../actions/broadcast/userJoined";
import { b_userLeft } from "../../actions/broadcast/userLeft";
import { b_userUpdate } from "../../actions/broadcast/userUpdate";
import {
  s_logoutError,
  s_logoutSuccess
} from "../../actions/server/responses/logoutReponse";
import {
  s_getUserListError,
  s_getUserListSuccess
} from "../../actions/server/responses/getUserListResponse";
import {
  s_updateUserDataError,
  s_updateUserDataSuccess
} from "../../actions/server/responses/updateUserDataResponse";

export function* c_messageWatcher() {
  yield takeLatest(actionTypes.C_MESSAGE, c_messageSaga);
}

export function* c_messageSaga({ payload }) {
  // Unpack message
  const message = JSON.parse(payload.message);

  console.log(`client received a message: ${message.type}`);

  switch (message.type) {
    case actionTypes.S_LOGIN_SUCCESS:
      yield put(s_loginSuccess(message.userId));
      break;
    case actionTypes.S_LOGIN_ERROR:
      yield put(s_loginError(message.error));
      break;
    case actionTypes.S_LOGOUT_SUCCESS:
      yield put(s_logoutSuccess());
      break;
    case actionTypes.S_LOGOUT_ERROR:
      yield put(s_logoutError(message.error));
      break;
    case actionTypes.S_GET_USER_LIST_SUCCESS:
      yield put(s_getUserListSuccess(message.userList));
      break;
    case actionTypes.S_GET_USER_LIST_ERROR:
      yield put(s_getUserListError(message.error));
      break;
    case actionTypes.S_UPDATE_USER_DATA_SUCCESS:
      yield put(s_updateUserDataSuccess());
      break;
    case actionTypes.S_UPDATE_USER_DATA_ERROR:
      yield put(s_updateUserDataError(message.error));
      break;
    case actionTypes.B_USER_JOINED:
      yield put(b_userJoined(message.userId, message.userData));
      break;
    case actionTypes.B_USER_UPDATE:
      yield put(b_userUpdate(message.userId, message.userData));
      break;
    case actionTypes.B_USER_LEFT:
      yield put(b_userLeft(message.userId));
      break;
  }
}
