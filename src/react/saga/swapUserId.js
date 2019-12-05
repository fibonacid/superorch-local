import { takeLatest, select, put } from "redux-saga/effects";
import { updateUser } from "../actions/updateUser";
import { selectDefaultUser } from "../reducers/root";
import { actionTypes } from "../actions/actionTypes";

export function* swapUserIdWatcher() {
  yield takeLatest(actionTypes.SWAP_USER_ID, swapUserIdSaga);
}

export function* swapUserIdSaga(action) {
  const { id } = yield select(state => selectDefaultUser(state));

  console.log("swapUserIdSaga", id);

  yield put(updateUser(id, { id: action.newId }));
}
