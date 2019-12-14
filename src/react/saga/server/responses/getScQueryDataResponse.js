import { put, select } from "redux-saga/effects";
import {
  s_getScQueryDataError,
  s_getScQueryDataSuccess
} from "../../../actions/server/responses/getScQueryDataResponse";
import { s_transmit } from "../../../actions/server/transmit";
import { selectScQuery } from "../../../reducers/root";

export function* s_getScQueryDataResponseSaga(clientId, scqId) {
  try {
    // Get list of users from state
    const scqData = yield select(state => selectScQuery(state, scqId));
    // Send it to the requesting client
    yield put(s_transmit(clientId, s_getScQueryDataSuccess(scqData)));
  } catch (error) {
    // If there was an error:
    // Transmit error to the client that tried logging in.
    yield put(s_transmit(clientId, s_getScQueryDataError(error)));
    console.error(error);
  }
}
