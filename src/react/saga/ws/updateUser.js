import { takeLatest, select, put } from "redux-saga/effects";
import { actionTypes } from "../../actions/actionTypes";
import { send } from "@giantmachines/redux-websocket";
import { wsUserUpdate } from "../../actions/ws/userUpdate";

export function* wsUpdateUserWatcher() {
  yield takeLatest(actionTypes.UPDATE_USER, wsUpdateUserSaga);
}

export function* wsUpdateUserSaga(action) {
  // Check if user it's the default one before
  // sending an update to the server, otherwise
  // an infinite loop is triggered.
  const { myUserId } = yield select(state => state.base);
  if (action.id === myUserId) {
    yield put(send(wsUserUpdate(action.id, action.data)));
  }
}
