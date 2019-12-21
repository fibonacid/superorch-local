import _ from "lodash";
import { call, put, select } from "redux-saga/effects";
import {
  s_updateUserDataError,
  s_updateUserDataSuccess
} from "../../../actions/server/responses/updateUserDataResponse";
import { s_transmit } from "../../../actions/server/transmit";
import { s_broadcast } from "../../../actions/server/broadcast";
import { selectClient, selectUser } from "../../../reducers/root";
import { b_userUpdate } from "../../../actions/broadcast/userUpdate";
import { statusCodes } from "../../../utils/constants";
import { testFunction } from "../../../utils/testing";

export function* s_updateUserDataResponseSaga(clientId, userData) {
  try {
    // Call testFunction to enable test code injection
    if (process.env.NODE_ENV === "test") {
      yield call(testFunction);
    }
    // Filter out id property
    const newUserData = _.omit(userData, ["id"]);

    // Get user associated with the client
    const client = yield select(state => selectClient(state, clientId));
    const user = yield select(state => selectUser(state, client.userId));

    // Broadcast user update
    yield put(s_broadcast(clientId, b_userUpdate(user.id, newUserData)));

    // Transmit success message
    yield put(s_transmit(clientId, s_updateUserDataSuccess()));
  } catch (error) {
    // Transmit error message
    yield put(
      s_transmit(clientId, s_updateUserDataError(500, statusCodes[500]))
    );
    process.env.NODE_ENV !== "test" && console.error(error);
  }
}
