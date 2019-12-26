import { actionTypes } from "../../actions/actionTypes";
import { takeLatest, put } from "redux-saga/effects";
import actions from "../../actions";

const { destroyUser } = actions;

export function* b_userLeftWatcher() {
  yield takeLatest(actionTypes.B_USER_LEFT, b_userLeftSaga);
}

export function* b_userLeftSaga(action) {
  yield put(destroyUser(action.userId));
}
