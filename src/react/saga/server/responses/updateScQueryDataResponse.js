import _ from "lodash";
import { put, select } from "redux-saga/effects";
import {
  selectClient,
  selectUser,
  selectScQuery
} from "../../../reducers/root";
import { s_transmit } from "../../../actions/server/transmit";
import {
  s_updateScQueryDataError,
  s_updateScQueryDataSuccess
} from "../../../actions/server/responses/updateScQueryDataResponse";
import { s_broadcast } from "../../../actions/server/broadcast";
import { b_scQueryUpdate } from "../../../actions/broadcast/scQueryUpdate";

export function* s_updateScQueryDataResponseSaga(clientId, scqId, scqData) {
  try {
    // Get user associated with the client
    const client = yield select(state => selectClient(state, clientId));
    const user = yield select(state => selectUser(state, client.userId));
    const scQuery = yield select(state => selectScQuery(state, scqId));

    // Check if scQuery exists:
    if (!scQuery) {
      return yield put(
        s_transmit(s_updateScQueryDataError(400, `ScQuery doesn't exist`))
      );
    }

    // Check if user owns the scQuery:
    if (user.id !== scQuery.userId) {
      return yield put(
        s_transmit(
          s_updateScQueryDataError(
            400,
            `You don't have the right permissions to update this scQuery`
          )
        )
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
    yield put(s_transmit(clientId, s_updateScQueryDataError(500)));
    console.error(error);
  }
}
