import { takeLatest, put } from "redux-saga/effects";
import { actionTypes } from "../../actions/actionTypes";
import { send } from "@giantmachines/redux-websocket";
import { wsUserUpdate } from "../../actions/ws/userUpdate";

export function* wsUpdateUserWatcher() {
  yield takeLatest(actionTypes.UPDATE_USER, wsUpdateUserSaga);
}

export function* wsUpdateUserSaga(action) {
  yield put(send(wsUserUpdate(action.id, action.data)));
}
