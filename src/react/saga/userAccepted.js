import { put, select, takeLatest } from "redux-saga/effects";
import { actionTypes } from "../actions/actionTypes";
import { send } from "@giantmachines/redux-websocket/dist";
import { selectUser } from "../reducers/root";

export function* userAcceptedWatcher(action) {
  yield takeLatest(actionTypes.USER_ACCEPTED, userAcceptedSaga);
}

export function* userAcceptedSaga() {
  // Get username.
  const user = yield select(state => selectUser(state, -1));
  // Send it as a message
  yield put(
    send({
      type: "UPDATE_USER",
      data: user
    })
  );
}
