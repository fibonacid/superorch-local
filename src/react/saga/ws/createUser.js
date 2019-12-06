import { actionTypes } from "../../actions/actionTypes";
import { takeLatest, put, race, take, delay, select } from "redux-saga/effects";
import { send } from "@giantmachines/redux-websocket";
import { wsCreateUser } from "../../actions/ws/createUser";
import { updateUser } from "../../actions/updateUser";
import { updateMyUserId } from "../../actions/updateMyUserId";
import { wsGetUserList } from "../../actions/ws/getUserList";
import { wsCreateDocument } from "../../actions/ws/createDocument";

export function* wsCreateUserWatcher() {
  yield takeLatest(actionTypes.WS_CREATE_USER, wsCreateUserSaga);
}

export function* wsCreateUserSaga(action) {
  // Request a new user list
  yield put(send(wsCreateUser(action.user)));

  // Wait for an error or success message
  const { result, error, timeout } = yield race({
    result: take(actionTypes.WS_CREATE_USER_SUCCESS),
    error: take(actionTypes.WS_CREATE_USER_ERROR),
    timeout: delay(2000, `Request took too long to complete`)
  });

  // If request completed successfully:
  if (result) {
    // Get default user id
    const { myUserId } = yield select(state => state.base);

    // Swap it with new one:

    // Update the record in the users reducer.
    yield put(updateUser(myUserId, { id: result.userId }));
    // Update the record inside base reducer.
    yield put(updateMyUserId(result.userId));
    // Finally ask for a new user list
    yield put(wsGetUserList());

    // Now: create a document
    // ------------------------------
    // todo: this should be optional
    const document = yield select(state => state.chat.document);
    yield put(wsCreateDocument(document));
  }
  // If request raised an error on the server:
  else if (error) {
    console.error(error);
  }
  // If request took to long to complete
  else if (timeout) {
    console.log(timeout);
  }
}
