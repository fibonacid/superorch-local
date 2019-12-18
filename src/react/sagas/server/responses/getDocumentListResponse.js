import { put, select } from "redux-saga/effects";
import {
  s_getDocumentListError,
  s_getDocumentListSuccess
} from "../../../actions/server/responses/getDocumentListResponse";
import { s_transmit } from "../../../actions/server/transmit";
import { selectDocuments } from "../../../reducers/root";

export function* s_getDocumentListResponseSaga(clientId) {
  try {
    // Get list of users from state
    const docList = yield select(state => selectDocuments(state));
    // Send it to the requesting client
    yield put(s_transmit(clientId, s_getDocumentListSuccess(docList)));
  } catch (error) {
    // If there was an error:
    // Transmit error to the client that tried logging in.
    yield put(s_transmit(clientId, s_getDocumentListError(error)));
    console.error(error);
  }
}
