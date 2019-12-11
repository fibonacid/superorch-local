import { actionTypes } from "../../../actions/actionTypes";
import { takeLatest } from "redux-saga/effects";

export function* c_updateUserDataSuccessWatcher() {
  yield takeLatest(
    actionTypes.C_UPDATE_USER_DATA_SUCCESS,
    c_updateUserDataSuccessSaga
  );
}

export function* c_updateUserDataSuccessSaga(action) {
  console.log("user updated");
}
