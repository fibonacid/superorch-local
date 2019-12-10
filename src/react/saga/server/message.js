import { actionTypes } from "../../actions/actionTypes";
import { takeLatest, call } from "redux-saga/effects";
import { s_loginResponseSaga } from "./loginResponse";
import { s_logoutResponseSaga } from "./logoutResponse";

export function* s_messageWatcher() {
  yield takeLatest(actionTypes.S_MESSAGE, s_messageSaga);
}

export function* s_messageSaga(action) {
  // Unpack message
  const { clientId } = action;
  const message = JSON.parse(action.message);

  console.log(`server received a message: ${message.type}`);

  // Handle actions embedded in the message
  switch (message.type) {
    case actionTypes.C_LOGIN_REQUEST:
      return yield call(s_loginResponseSaga, message.userData, clientId);
    case actionTypes.C_LOGOUT_REQUEST:
      return yield call(s_logoutResponseSaga, clientId);
  }
}
