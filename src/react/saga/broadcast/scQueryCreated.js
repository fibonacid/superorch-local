import { actionTypes } from "../../actions/actionTypes";
import { takeLatest, put } from "redux-saga/effects";
import { c_execScCodeRequest } from "../../actions/client/requests/execScCodeRequest";

export function* b_scQueryCreatedWatcher() {
  yield takeLatest(actionTypes.B_SC_QUERY_CREATED, b_scQueryCreatedSaga);
}

export function* b_scQueryCreatedSaga(action) {
  const { input: scCode } = action.scqData;
  yield put(c_execScCodeRequest(scCode));
}
