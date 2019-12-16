import { actionTypes } from "../../actions/actionTypes";
import { takeLatest, put } from "redux-saga/effects";
import { c_execScQueryRequest } from "../../actions/client/requests/execScQueryRequest";

export function* b_scQueryCreatedWatcher() {
  yield takeLatest(actionTypes.B_SC_QUERY_CREATED, b_scQueryCreatedSaga);
}

export function* b_scQueryCreatedSaga(action) {
  yield put(c_execScQueryRequest(action.scqId));
}
