import {
  s_createDocumentError,
  s_createDocumentSuccess
} from "../../../actions/server/responses/createDocumentResponse";
import { s_broadcast } from "../../../actions/server/broadcast";
import { s_transmit } from "../../../actions/server/transmit";
import { put, select, call } from "redux-saga/effects";
import { selectClient, selectUser } from "../../../reducers/root";
import { b_documentCreated } from "../../../actions/broadcast/documentCreated";
import { testFunction } from "../../../utils/testing";
import { statusCodes } from "../../../utils/constants";

let docCount = 10 * Math.floor(Math.random() * 10);

/**
 *
 * @returns {number}
 */
export function generateDocId() {
  docCount++;
  return docCount;
}

/**
 *
 * @param clientId
 * @param docData
 * @returns {IterableIterator<PutEffect<{clientId, type, message}>|CallEffect|SelectEffect>}
 */
export function* s_createDocumentResponseSaga(clientId, docData) {
  docCount++;
  try {
    if (process.env.NODE_ENV === "test") {
      yield call(testFunction);
    }

    // Get user associated with the client
    const client = yield select(state => selectClient(state, clientId));
    const user = yield select(state => selectUser(state, client.userId));

    const docId = yield call(generateDocId);

    const newDoc = {
      ...docData,
      id: docId,
      userId: user.id
    };

    // Broadcast new document
    yield put(s_broadcast(clientId, b_documentCreated(docId, newDoc)));

    // Transmit success message
    yield put(s_transmit(clientId, s_createDocumentSuccess(docId, newDoc)));
  } catch (error) {
    // Send error message
    yield put(
      s_transmit(clientId, s_createDocumentError(500, statusCodes[500]))
    );
    process.env.NODE_ENV !== "test" && console.error(error);
  }
}
