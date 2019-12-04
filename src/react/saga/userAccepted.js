import { actionTypes } from "../actions/actionTypes";
import { take, put, select } from "redux-saga/effects";
import { populateUserList, updateUser } from "../actions/usersActions";

export function* userAcceptedWatcher() {
  console.log("userAcceptedWatcher");
  yield take(actionTypes.USER_ACCEPTED, userAcceptedSaga);
}

export function* userAcceptedSaga(action) {
  console.log("userAcceptedSaga");

  const { newId, data } = action;

  const oldId = yield select(state => state.websocket.userId);
  yield put(updateUser(oldId, { id: newId }));

  yield put(populateUserList(data.data.users));
}
