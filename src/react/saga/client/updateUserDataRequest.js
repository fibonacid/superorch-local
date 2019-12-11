import { actionTypes } from "../../actions/actionTypes";
import { takeLatest } from "redux-saga/effects";

export function* c_updateUserDataRequestWatcher() {
  yield takeLatest(
    actionTypes.C_UPDATE_USER_DATA_REQUEST,
    c_updateUserDataRequestSaga
  );
}

export function* c_updateUserDataRequestSaga(action) {
  console.log("c_updateUserDataRequestSaga", action);
}
