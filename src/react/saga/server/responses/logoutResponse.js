import { put, select } from "redux-saga/effects";
import {
  s_logoutError,
  s_logoutSuccess
} from "../../../actions/server/responses/logoutReponse";
import { b_userLeft } from "../../../actions/broadcast/userLeft";
import { s_transmit } from "../../../actions/server/transmit";
import { s_broadcast } from "../../../actions/server/broadcast";
import { selectClient, selectUser } from "../../../reducers/root";

export function* s_logoutResponseSaga(clientId) {
  try {
    // Get client from the state
    const client = yield select(state => selectClient(state, clientId));
    // Get associated user
    const user = yield select(state => selectUser(state, client.userId));

    // Transmit that the logout was successful
    yield put(s_transmit(clientId, s_logoutSuccess(user.id)));

    // Broadcast that the user has left the chat
    yield put(s_broadcast(clientId, b_userLeft(user.id)));
  } catch (error) {
    // If there was an error:
    // Transmit error to the client that tried logging in.
    yield put(s_transmit(clientId, s_logoutError(error.message)));
    console.error(error);
  }
}
