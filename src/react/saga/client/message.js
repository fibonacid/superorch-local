import { actionTypes } from "../../actions/actionTypes";
import { takeLatest, put } from "redux-saga/effects";
import { s_loginSuccess } from "../../actions/server/loginResponse";

export function* c_messageWatcher() {
  yield takeLatest(actionTypes.C_MESSAGE, c_messageSaga);
}

export function* c_messageSaga({ payload }) {
  // Unpack message
  const message = JSON.parse(payload.message);

  //console.log(message);

  switch (message.type) {
    case actionTypes.S_LOGIN_SUCCESS:
      yield put(s_loginSuccess(message.userId));
  }
}
