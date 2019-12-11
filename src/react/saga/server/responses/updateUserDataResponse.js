import _ from 'lodash';
import {put, select} from "redux-saga/effects";
import {
  s_updateUserDataError,
  s_updateUserDataSuccess
} from "../../../actions/server/responses/updateUserDataResponse";
import { s_transmit } from "../../../actions/server/transmit";
import { s_broadcast } from "../../../actions/server/broadcast";
import {selectClient, selectUser} from "../../../reducers/root";
import {b_userUpdate} from "../../../actions/broadcast/userUpdate";


export function* s_updateUserDataResponseSaga(clientId, userData) {
  try {

    const newUserData = _.omit(userData, "id");

    // Get user associated with the client
    const client = yield select(state => selectClient(state, clientId));
    const user = yield select(state => selectUser(state, client.userId));

    // Broadcast user update
    yield put(s_broadcast(clientId, b_userUpdate(user.id, newUserData)));

    // Transmit success message
    yield put(s_transmit(clientId, s_updateUserDataSuccess()));

  } catch (error) {

    // Transmit error message
    yield put(s_transmit(clientId, s_updateUserDataError(error)));
  }
}
