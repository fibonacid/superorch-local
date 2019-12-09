import { put } from "redux-saga/effects";
import { s_createUser } from "../../actions/server/crudUsers";

let userCount = 0;

export function* s_createUserSaga(userData, clientId) {
  // Update user count
  userCount++;

  // Create new user with given data,
  // but locally generated id.
  const newUser = {
    ...userData,
    id: userCount
  };

  try {
    // Store new user
    yield put(s_createUser(newUser.id, newUser));
  } catch (error) {
    console.error(error);
  }
}
