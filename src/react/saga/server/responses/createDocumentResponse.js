import {
  s_createDocumentError,
  s_createDocumentSuccess
} from "../../../actions/server/responses/createDocumentResponse";
import { s_broadcast } from "../../../actions/server/broadcast";
import { s_transmit } from "../../../actions/server/transmit";
import { put, select } from "redux-saga/effects";
import { selectClient, selectUser } from "../../../reducers/root";
import { b_documentCreated } from "../../../actions/broadcast/documentCreated";

let docCount = 10 * Math.floor(Math.random() * 10);

export function* s_createDocumentResponseSaga(clientId, docData) {
  docCount++;
  try {
    // Get user associated with the client
    const client = yield select(state => selectClient(state, clientId));
    const user = yield select(state => selectUser(state, client.userId));

    if (!user) {
      throw new Error(`Client must be logged in to create a document`);
    }

    const newDoc = {
      ...docData,
      id: docCount,
      userId: user.id
    };

    // Broadcast new document
    yield put(s_broadcast(clientId, b_documentCreated(newDoc.id, newDoc)));

    // Transmit success message
    yield put(s_transmit(clientId, s_createDocumentSuccess(newDoc.id, newDoc)));
  } catch (error) {
    // Send error message
    yield s_transmit(clientId, s_createDocumentError(error));
  }
}
