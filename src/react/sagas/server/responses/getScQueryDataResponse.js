import { put, select } from "redux-saga/effects";
import {
  s_getScQueryDataError,
  s_getScQueryDataSuccess
} from "../../../actions/server/responses/getScQueryDataResponse";
import { s_transmit } from "../../../actions/server/transmit";
import { selectScQuery } from "../../../reducers/root";
import { statusCodes } from "../../../utils/constants";

export function* s_getScQueryDataResponseSaga(clientId, scqId) {
  try {
    // Get list of users from state
    const scqData = yield select(state => selectScQuery(state, scqId));

    console.log("s_getScQueryDataResponseSaga", { scqData });

    if (typeof scqData === "undefined") {
      console.error(`scQuery with id ${scqId} doesn't exist`);
      return yield put(
        s_transmit(clientId, s_getScQueryDataError(400, statusCodes[400]))
      );
    }

    // Send it to the requesting client
    yield put(s_transmit(clientId, s_getScQueryDataSuccess(scqData)));
  } catch (error) {
    // If there was an error:
    // Transmit error to the client that tried logging in.
    yield put(s_transmit(clientId, s_getScQueryDataError(error)));
    console.error(error);
  }
}
