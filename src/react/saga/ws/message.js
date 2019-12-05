import { actionTypes } from "../../actions/actionTypes";
import { takeLatest, select, put } from "redux-saga/effects";
import { updateUser } from "../../actions/updateUser";
import { updateMyUserId } from "../../actions/updateMyUserId";
import { wsGetUserList } from "../../actions/ws/getUserList";

export function* wsMessageWatcher() {
  yield takeLatest(actionTypes.WS_MESSAGE, wsMessageSaga);
}

export function* wsMessageSaga({ payload }) {
  const message = JSON.parse(payload.message);
  switch (message.type) {
    case actionTypes.WS_CREATE_USER_SUCCESS:
      // Get default user id
      const { myUserId } = yield select(state => state.base);
      // Swap it with new one:
      // Update the record in the users reducer.
      yield put(updateUser(myUserId, { id: message.userId }));
      // Update the record inside base reducer.
      yield put(updateMyUserId(message.userId));
      // Finally ask for a user new list
      return yield put(wsGetUserList());

    case actionTypes.WS_CREATE_USER_ERROR:
      console.error(message.error);
      break;
  }
}
