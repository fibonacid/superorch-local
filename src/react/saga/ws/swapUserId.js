import { select, put } from "redux-saga/effects";
import { updateUser } from "../../actions/updateUser";

export function* swapUserId(newId) {
  const myUserId = yield select(
    state => state.websocket.userId // todo: change path for this
  );

  yield put(updateUser(myUserId, { id: newId }));
}
