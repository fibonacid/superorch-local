import { actionTypes } from "../../actions/actionTypes";
import { takeLatest, put, select } from "redux-saga/effects";
import { send } from "@giantmachines/redux-websocket";
import { selectUser } from "../../reducers/root";

export function* c_loginRequestWatcher() {
  yield takeLatest(actionTypes.C_LOGIN_REQUEST, c_loginRequestSaga);
}

export function* c_loginRequestSaga(action) {
  const { myUserId } = yield select(state => state.base);
  const userData = yield select(state => selectUser(state, myUserId));

  const message = {
    ...action,
    userData
  };

  yield put(send(message));
}
