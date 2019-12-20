import { s_transmit } from "../../../actions/server/transmit";
import { statusCodes } from "../../../utils/constants";
import {
  s_createScQueryError,
  s_createScQuerySuccess
} from "../../../actions/server/responses/createScQueryResponse";
import { selectClient, selectUser } from "../../../reducers/root";
import { put, select, all, call } from "redux-saga/effects";
import { s_broadcast } from "../../../actions/server/broadcast";
import { b_scQueryCreated } from "../../../actions/broadcast/scQueryCreated";
import { testFunction } from "../../../utils/testing";

let scqCount = 10 * Math.floor(Math.random() * 10);

export function generateScqId() {
  return scqCount++;
}

export function* s_createScQueryResponseSaga(clientId, scqData) {
  try {
    if (process.env.NODE_ENV === "test") {
      yield call(testFunction);
    }

    // Get user associated with the client
    const client = yield select(state => selectClient(state, clientId));
    const user = yield select(state => selectUser(state, client.userId));

    const scqId = yield call(generateScqId);

    const newScqData = {
      ...scqData,
      id: scqId,
      userId: user.id
    };

    yield all([
      put(s_broadcast(clientId, b_scQueryCreated(scqId, newScqData))),
      put(s_transmit(clientId, s_createScQuerySuccess(scqId, newScqData)))
    ]);
  } catch (error) {
    // Send error message
    yield put(
      s_transmit(clientId, s_createScQueryError(500, statusCodes[500]))
    );
    if (process.env.NODE_ENV !== "test") {
      console.error(error);
    }
  }
}
