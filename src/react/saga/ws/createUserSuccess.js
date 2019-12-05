import { select, put } from "redux-saga/effects";
import { updateUser } from "../../actions/updateUser";

export function* wsCreateUserSuccessSaga(action) {
  const myUserId = yield select(
    state => state.websocket.userId // todo: change path for this
  );

  const newId = action.userId;

  yield put(updateUser(myUserId, { id: newId }));
}
