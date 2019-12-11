import { s_transmit } from "../../../actions/server/transmit";
import { s_createDocumentError } from "../../../actions/server/responses/createDocumentResponse";
//import {s_broadcast} from "../../../actions/server/broadcast";
import { select } from "@redux-saga/core/effects";
import { selectClient, selectUser } from "../../../reducers/root";

let docCount = 0;

export function* s_createDocumentResponseSaga(clientId, docData) {
  docCount++;
  try {
    // Get user associated with the client
    const client = yield select(state => selectClient(state, clientId));
    const user = yield select(state => selectUser(state, client.userId));

    const newDoc = {
      ...docData,
      id: docCount,
      userId: user.id
    };

    //yield s_broadcast(clientId, b_documentCreated(newDoc.id, newDoc))
  } catch (error) {
    // Send error message
    yield s_transmit(clientId, s_createDocumentError(error));
  }
}
