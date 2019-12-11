import { actionTypes } from "../../actions/actionTypes";
import { takeLatest, call } from "redux-saga/effects";
import { s_loginResponseSaga } from "./responses/loginResponse";
import { s_logoutResponseSaga } from "./responses/logoutResponse";
import { s_getUserListResponseSaga } from "./responses/getUserListResponse";
import { s_updateUserDataResponseSaga } from "./responses/updateUserDataResponse";

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
      return yield call(s_loginResponseSaga, clientId, message.userData);
    case actionTypes.C_LOGOUT_REQUEST:
      return yield call(s_logoutResponseSaga, clientId);
    case actionTypes.C_GET_USER_LIST_REQUEST:
      return yield call(s_getUserListResponseSaga, clientId);
    case actionTypes.C_UPDATE_USER_DATA_REQUEST:
      return yield call(
        s_updateUserDataResponseSaga,
        clientId,
        message.userData
      );
  }
}
