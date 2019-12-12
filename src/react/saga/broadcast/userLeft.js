import { actionTypes } from "../../actions/actionTypes";
import { takeLatest, put } from "redux-saga/effects";
import { c_destroyUser } from "../../actions/client/crudUsers";

export function* b_userLeftWatcher() {
  yield takeLatest(actionTypes.B_USER_LEFT, b_userLeftSaga);
}

export function* b_userLeftSaga(action) {
  yield put(c_destroyUser(action.userId));
}
