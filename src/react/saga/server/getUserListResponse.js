import { put, select } from "redux-saga/effects";
import {
  s_getUserListError,
  s_getUserListSuccess
} from "../../actions/server/getUserListResponse";
import { s_transmit } from "../../actions/server/transmit";
import { selectUsers } from "../../reducers/chat";

export function* s_getUserListResponseSaga(userData, clientId) {
  try {
    // Get list of users from state
    const userList = yield select(state => selectUsers(state));
    // Send it to the requesting client
    yield put(s_transmit(clientId, s_getUserListSuccess(userList)));
  } catch (error) {
    // If there was an error:
    // Transmit error to the client that tried logging in.
    yield put(s_transmit(clientId, s_getUserListError(error)));
  }
}
