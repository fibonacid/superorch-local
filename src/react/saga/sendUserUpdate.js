import { actionTypes } from "../actions/actionTypes";
import { put, takeEvery } from "redux-saga/effects";
import { send } from "@giantmachines/redux-websocket/dist";

/**
 * Every time a connection is opened send your username to the server
 */
export function* sendUserUpdateWatcher() {
  yield takeEvery(actionTypes.UPDATE_USER, sendUserUpdateSaga);
}

export function* sendUserUpdateSaga(action) {
  // Send it as a message
  yield put(
    send({
      type: "UPDATE_USER",
      userId: action.id,
      data: action.data
    })
  );
}
