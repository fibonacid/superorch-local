import { put, select, call } from "redux-saga/effects";
import {
  s_getScQueryDataError,
  s_getScQueryDataSuccess
} from "../../../actions/server/responses/getScQueryDataResponse";
import { s_transmit } from "../../../actions/server/transmit";
import { selectScQuery } from "../../../reducers/root";
import { statusCodes } from "../../../utils/constants";
import { testFunction } from "../../../utils/testing";

export function* s_getScQueryDataResponseSaga(clientId, scqId) {
  try {
    // Call testFunction to enable test code injection
    if (process.env.NODE_ENV === "test") {
      yield call(testFunction);
    }

    // Get list of users from state
    const scqData = yield select(state => selectScQuery(state, scqId));

    if (typeof scqData === "undefined") {
      const message = `supercollider query with id ${scqId} wasn't found`;
      process.env.NODE_ENV !== "test" && console.error(message);
      // transmit error message
      return yield put(
        s_transmit(clientId, s_getScQueryDataError(404, message))
      );
    }

    // Send it to the requesting client
    yield put(s_transmit(clientId, s_getScQueryDataSuccess(scqData)));
  } catch (error) {
    // If there was an error:
    // Transmit error to the client that tried logging in.
    yield put(
      s_transmit(clientId, s_getScQueryDataError(500, statusCodes[500]))
    );
    process.env.NODE_ENV !== "test" && console.error(error);
  }
}
