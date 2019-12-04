import { put, select, takeLatest } from "redux-saga/effects";
import { actionTypes } from "../actions/actionTypes";
import { selectUserByLocalId, selectUsers } from "../reducers/root";
import { send } from "@giantmachines/redux-websocket";

export function* userAcceptedWatcher(action) {
  yield takeLatest(actionTypes.USER_ACCEPTED, userAcceptedSaga);
}

export function* userAcceptedSaga() {
  // Get main user.
  const user = yield select(state => selectUserByLocalId(state, 0));
  // Send it as a message
  yield put(
    send({
      type: "UPDATE_USER",
      data: user
    })
  );
}
