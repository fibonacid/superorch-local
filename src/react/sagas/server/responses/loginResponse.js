import { call, put, select } from "redux-saga/effects";
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

export function* s_loginResponseSaga(clientId, userData, password) {
  try {
    // Call testFunction to enable test code injection
    if (process.env.NODE_ENV === "test") {
      yield call(testFunction);
    }

    // Get password and authRequired from the state
    const { authRequired } = yield select(state => state.server.status);
    // If authentication is required
    if (authRequired === true) {
      // If no password is given
      if (!password) {
        // transmit a message to the client the signal that
        // it can't login without a valid password.
        yield put(
          s_transmit(clientId, s_loginError(403, `Password is required`))
        );
      } else {
        // Try authenticating client:
        const success = yield call(authenticate, password);
        // If authentication failed:
        if (success === false) {
          // transmit a message to the client to signal
          // that the given password is incorrect.
          yield put(
            s_transmit(clientId, s_loginError(403, `Password is incorrect`))
          );
        }
      }
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

export function* authenticate(password) {
  const { password: serverPass } = yield select(state => state.server.status);
  // If server password is exists:
  if (serverPass) {
    // Find out if passwords match
    return password === serverPass;
  } else {
    // Else, throw an error 500.
    throw new Error(
      "authentication failed due to an error: server password is undefined"
    );
  }
}
