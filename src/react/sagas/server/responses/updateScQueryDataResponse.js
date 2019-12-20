import _ from "lodash";
import { call, put, select } from "redux-saga/effects";
import { selectScQuery } from "../../../reducers/root";
import { s_transmit } from "../../../actions/server/transmit";
import {
  s_updateScQueryDataError,
  s_updateScQueryDataSuccess
} from "../../../actions/server/responses/updateScQueryDataResponse";
import { s_broadcast } from "../../../actions/server/broadcast";
import { b_scQueryUpdate } from "../../../actions/broadcast/scQueryUpdate";
import { testFunction } from "../../../utils/testing";
import { statusCodes } from "../../../utils/constants";

export function* s_updateScQueryDataResponseSaga(clientId, scqId, scqData) {
  try {
    // Call testFunction to enable test code injection
    if (process.env.NODE_ENV === "test") {
      yield call(testFunction);
    }
    // Get query from the store
    const scQuery = yield select(state => selectScQuery(state, scqId));

    // Check if scQuery exists:
    if (!scQuery) {
      const message = `supercollider query with id ${scqId} doesn't exist`;
      process.env.NODE_ENV !== "test" && console.error(message);
      return yield put(
        s_transmit(clientId, s_updateScQueryDataError(404, message))
      );
    }

    // Filter out ids
    const newScQData = _.omit(scqData, ["id", "userId"]);

    // Broadcast scQuery update
    yield put(s_broadcast(clientId, b_scQueryUpdate(scqId, newScQData)));

    // Transmit success message
    yield put(s_transmit(clientId, s_updateScQueryDataSuccess()));
  } catch (error) {
    // Transmit error message
    yield put(
      s_transmit(clientId, s_updateScQueryDataError(500, statusCodes[500]))
    );
    process.env.NODE_ENV !== "test" && console.error(error);
  }
}
