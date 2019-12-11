import { actionTypes } from "../../actions/actionTypes";
import { takeLatest } from "@redux-saga/core/effects";

export function* c_updateUserWatcher() {
  yield takeLatest(actionTypes.C_UPDATE_USER, c_updateUserSaga);
}

export function* c_updateUserSaga(action) {
  console.log("c_updateUserSaga", action);
}
