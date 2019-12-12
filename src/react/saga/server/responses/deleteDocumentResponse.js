import { statusCodes } from "../../../utils/constants";
import { put, select } from "redux-saga/effects";
import {
  s_deleteDocumentError,
  s_deleteDocumentSuccess
} from "../../../actions/server/responses/deleteDocumentResponse";
import { s_broadcast } from "../../../actions/server/broadcast";
import { s_transmit } from "../../../actions/server/transmit";
import { b_documentClosed } from "../../../actions/broadcast/documentClosed";
import {
  selectClient,
  selectDocument,
  selectUser
} from "../../../reducers/root";

export function* s_deleteDocumentResponseSaga(clientId, docId) {
  try {
    // Get user associated with the client
    const client = yield select(state => selectClient(state, clientId));
    const user = yield select(state => selectUser(state, client.userId));
    const document = yield select(state => selectDocument(state, docId));

    // Check if document exists:
    if (!document) {
      return yield put(
        s_transmit(s_deleteDocumentError(400, `Document doesn't exist`))
      );
    }

    // Check if user owns the document:
    if (user.id !== document.userId) {
      return yield put(
        s_transmit(
          s_deleteDocumentError(
            400,
            `You don't have the right permissions to delete this document`
          )
        )
      );
    }

    // Broadcast document closing
    yield put(s_broadcast(clientId, b_documentClosed(docId)));

    // Transmit success message
    yield put(s_transmit(clientId, s_deleteDocumentSuccess()));
  } catch (error) {
    // Send error message
    yield s_transmit(clientId, s_deleteDocumentError(500, statusCodes[500]));
    console.error(error);
  }
}
