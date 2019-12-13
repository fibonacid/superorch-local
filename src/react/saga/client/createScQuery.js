import { actionTypes } from "../../actions/actionTypes";
import { takeEvery, select, put } from "redux-saga/effects";
import { c_createScQueryRequest } from "../../actions/client/requests/createScQueryRequest";

export function* c_createScQueryWatcher() {
  yield takeEvery(actionTypes.C_CREATE_SC_QUERY, c_createScQuerySaga);
}

export function* c_createScQuerySaga(action) {
  // Get data from client status
  const { isLoggedIn, myScQueryIds } = yield select(
    state => state.client.status
  );

  // If it's client not logged in:
  if (!isLoggedIn) {
    // End task
    return null;
  }

  // If scQuery belongs to the user:
  if (myScQueryIds.indexOf(action.scqId) !== -1) {
    // dispatch server request
    yield put(c_createScQueryRequest(action.scqId, action.scqData));
  }
}
