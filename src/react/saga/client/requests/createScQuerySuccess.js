import { takeLatest } from "redux-saga/effects";
import { actionTypes } from "../../../actions/actionTypes";

export function* c_createScQuerySuccessWatcher() {
  yield takeLatest(
    actionTypes.C_CREATE_SC_QUERY_SUCCESS,
    c_createScQuerySuccessSaga
  );
}

export function* c_createScQuerySuccessSaga(action) {
  console.log("success", action.message);
}
