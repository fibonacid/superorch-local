import _ from "lodash";
import { INITIAL_USER_ID } from "../utils/constants";
import { actionTypes } from "../actions/actionTypes";
import { takeLatest, put, select, call } from "redux-saga/effects";
import { populateUserList, updateUser } from "../actions/usersActions";
import { selectUser } from "../reducers/root";
import { sendUserUpdateSaga } from "./sendUserUpdate";

export function* userAcceptedWatcher() {
  yield takeLatest(actionTypes.USER_ACCEPTED, userAcceptedSaga);
}

export function* userAcceptedSaga(action) {
  const { newId, data } = action;

  const myUser = yield select(state => selectUser(state, INITIAL_USER_ID));
  const updatedUser = { ...myUser, id: newId };

  // Update received list with personal data
  const newUserList = data.users.map(user =>
    // If it's my personal user:
    user.id === newId
      ? /* Update the id but keep the rest of the data. */
        updatedUser
      : /* Else: keep user as it is. */
        user
  );

  // Store new user list
  yield put(populateUserList(newUserList));

  // update user on the server
  yield call(sendUserUpdateSaga, updateUser(newId, _.omit(updatedUser, "id")));
}
