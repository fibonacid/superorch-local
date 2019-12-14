import { actionTypes } from "../../../actions/actionTypes";
import { takeLatest } from "redux-saga/effects";

export function* c_getScQueryDataSuccessWatcher() {
  yield takeLatest(
    actionTypes.C_GET_SC_QUERY_DATA_SUCCESS,
    c_getScQueryDataSuccessSaga
  );
}

export function* c_getScQueryDataSuccessSaga(action) {
  console.log(action.message, action.scqData);
}
