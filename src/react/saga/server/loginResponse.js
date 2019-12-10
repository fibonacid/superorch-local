import { call } from "redux-saga/effects";
import {
  s_loginError,
  s_loginSuccess
} from "../../actions/server/loginResponse";
import { b_userJoined } from "../../actions/broadcast/userJoined";
import { s_transmit } from "../../actions/server/transmit";
import { s_broadcast } from "../../actions/server/broadcast";

let userCount = 0;

export function* s_loginResponseSaga(userData, clientId) {
  // Update user count
  userCount++;

  // Create new user with given data,
  // but locally generated id.
  const newUser = {
    ...userData,
    id: userCount
  };

  try {
    // Transmit new user id to the client that tried logging in.
    yield put(s_transmit(clientId, s_loginSuccess(newUser.id)));

    // Broadcast new user to the other clients
    yield put(s_broadcast(clientId, b_userJoined(newUser.id, newUser)));
  } catch (error) {
    // If there was an error:
    // Transmit error to the client that tried logging in.
    yield put(s_transmit(clientId, s_loginError(error)));
  }
}
