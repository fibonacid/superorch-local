import { actionTypes } from "../../actions/actionTypes";
import { put, takeLatest } from "redux-saga/effects";
import { send } from "@giantmachines/redux-websocket";
import { wsUpdateDocument } from "../../actions/ws/updateDocument";

export function* wsUpdateDocumentWatcher() {
  yield takeLatest(actionTypes.UPDATE_DOCUMENT, wsUpdateDocumentSaga);
}

export function* wsUpdateDocumentSaga(action) {
  yield put(send(wsUpdateDocument(action.document)));
}
