import { call, put, select } from "redux-saga/effects";
import {
  s_getUserListError,
  s_getUserListSuccess
} from "../../../actions/server/responses/getUserListResponse";
import { s_transmit } from "../../../actions/server/transmit";
import { selectUsers } from "../../../reducers/root";
import { testFunction } from "../../../utils/testing";
import { statusCodes } from "../../../utils/constants";

export function* s_getUserListResponseSaga(clientId) {
  try {
    // Call testFunction to enable test code injection
    if (process.env.NODE_ENV === "test") {
      yield call(testFunction);
    }
    // Get list of users from state
    const userList = yield select(state => selectUsers(state));
    // Send it to the requesting client
    yield put(s_transmit(clientId, s_getUserListSuccess(userList)));
  } catch (error) {
    // If there was an error:
    // Transmit error to the client that tried logging in.
    yield put(s_transmit(clientId, s_getUserListError(500, statusCodes[500])));
    process.env.NODE_ENV !== "test" && console.error(error);
  }
}
