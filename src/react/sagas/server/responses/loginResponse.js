import { call, put } from "redux-saga/effects";
import {
  s_loginError,
  s_loginSuccess
} from "../../../actions/server/responses/loginResponse";
import { b_userJoined } from "../../../actions/broadcast/userJoined";
import { s_transmit } from "../../../actions/server/transmit";
import { s_broadcast } from "../../../actions/server/broadcast";
import { s_updateClient } from "../../../actions/server/crudClients";
import { testFunction } from "../../../utils/testing";
import { statusCodes } from "../../../utils/constants";

let userCount = 10 * Math.floor(Math.random() * 10);

export function generateUserId() {
  return userCount++;
}

export function* s_loginResponseSaga(clientId, userData) {
  try {
    // Call testFunction to enable test code injection
    if (process.env.NODE_ENV === "test") {
      yield call(testFunction);
    }
    // Generate new user id
    const userId = yield call(generateUserId);

    // Create new user with given data,
    // but locally generated id.
    const newUser = {
      ...userData,
      id: userId
    };

    // Assign user to the client
    yield put(s_updateClient(clientId, { userId, isLoggedIn: true }));

    // Transmit new user id to the client that tried logging in.
    yield put(s_transmit(clientId, s_loginSuccess(userId)));

    // Broadcast new user to the other clients
    yield put(s_broadcast(clientId, b_userJoined(userId, newUser)));
  } catch (error) {
    // If there was an error:
    // Transmit error to the client that tried logging in.
    yield put(s_transmit(clientId, s_loginError(500, statusCodes[500])));
    process.env.NODE_ENV !== "test" && console.error(error);
  }
}
