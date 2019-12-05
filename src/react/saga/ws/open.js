// A connection is made and the server has stored an id for the client

import { actionTypes } from "../../actions/actionTypes";
import { takeLatest, put } from "redux-saga/effects";
import { wsCreateUser } from "../../actions/ws/createUser";
import { send } from "@giantmachines/redux-websocket";

// Every time
export function* wsOpenWatcher() {
  yield takeLatest(actionTypes.WS_OPEN, wsOpenSaga);
}

export function* wsOpenSaga() {
  yield put(send(wsCreateUser()));
}
