import { select, put } from "redux-saga/effects";
import { updateUser } from "../../actions/updateUser";
import { selectDefaultUser } from "../../reducers/root";

export function* swapUserId(newId) {
  const { id } = yield select(state => selectDefaultUser(state));

  yield put(updateUser(id, { id: newId }));
}
