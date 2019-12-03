import { actionTypes } from "../actions/actionTypes";
import { put, takeLatest } from "redux-saga/effects";
import { send } from "@giantmachines/redux-websocket/dist";

export function* sendSCLangQueryWatcher() {
  yield takeLatest(actionTypes.SEND_SCLANG_QUERY, sendSCLangQuerySaga);
}

export function* sendSCLangQuerySaga(action) {
  yield put(
    send({
      type: "EXECUTE_SCLANG_QUERY",
      data: action.query
    })
  );
}
