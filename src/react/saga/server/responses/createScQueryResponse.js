import { s_transmit } from "../../../actions/server/transmit";
import { statusCodes } from "../../../utils/constants";
import {
  s_createScQueryError,
  s_createScQuerySuccess
} from "../../../actions/server/responses/createScQueryResponse";
import { selectClient, selectUser } from "../../../reducers/root";
import { put, select, all } from "redux-saga/effects";
import { s_broadcast } from "../../../actions/server/broadcast";
import { b_scQueryCreated } from "../../../actions/broadcast/scQueryCreated";

let scqCount = 10 * Math.floor(Math.random() * 10);

export function* s_createScQueryResponseSaga(clientId, scqData) {
  console.log("s_createScQueryResponseSaga", clientId, scqData);

  scqCount++;
  try {
    // Get user associated with the client
    const client = yield select(state => selectClient(state, clientId));
    const user = yield select(state => selectUser(state, client.userId));

    const newScqData = {
      ...scqData,
      id: scqCount,
      userId: user.id
    };

    yield all([
      put(s_broadcast(clientId, b_scQueryCreated(newScqData.id, newScqData))),
      put(
        s_transmit(clientId, s_createScQuerySuccess(newScqData.id, newScqData))
      )
    ]);
  } catch (error) {
    // Send error message
    yield put(
      s_transmit(clientId, s_createScQueryError(500, statusCodes[500]))
    );
    console.error(error);
  }
}
