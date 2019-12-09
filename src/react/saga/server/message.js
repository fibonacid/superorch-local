import { actionTypes } from "../../actions/actionTypes";
import { takeLatest, call } from "redux-saga/effects";
import { s_createUserSaga } from "./createUserSaga";

export function* s_messageWatcher() {
  yield takeLatest(actionTypes.S_MESSAGE, s_messageSaga);
}

export function* s_messageSaga(action) {
  console.log("s_messageSaga", action);
  // Unpack message
  const { clientId } = action;
  const message = JSON.parse(action.message);

  // Handle actions embedded in the message
  switch (message.type) {
    case actionTypes.C_LOGIN_REQUEST:
      return yield call(s_createUserSaga, message.userData, clientId);
  }
}
