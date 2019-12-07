import { actionTypes } from "../../actions/actionTypes";
import { put, takeLatest } from "redux-saga/effects";
import { send } from "@giantmachines/redux-websocket";
import { wsDocumentUpdate } from "../../actions/ws/documentUpdate";

export function* wsDocumentUpdateWatcher() {
  yield takeLatest(actionTypes.UPDATE_DOCUMENT, wsDocumentUpdateSaga);
}

export function* wsDocumentUpdateSaga(action) {
  yield put(send(wsDocumentUpdate(action.document)));
}
