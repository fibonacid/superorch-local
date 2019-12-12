import _ from "lodash";
import { put, select } from "redux-saga/effects";
import {
  selectClient,
  selectUser,
  selectDocument
} from "../../../reducers/root";
import { s_transmit } from "../../../actions/server/transmit";
import {
  s_updateUserDataError,
  s_updateUserDataSuccess
} from "../../../actions/server/responses/updateUserDataResponse";
import { s_broadcast } from "../../../actions/server/broadcast";
import { b_documentUpdate } from "../../../actions/broadcast/documentUpdate";

export function* s_updateDocumentDataResponseSaga(clientId, docId, docData) {
  try {
    // Get user associated with the client
    const client = yield select(state => selectClient(state, clientId));
    const user = yield select(state => selectUser(state, client.userId));
    const document = yield select(state => selectDocument(state, docId));

    // Check if document exists:
    if (!document) {
      return yield put(
        s_transmit(s_updateUserDataError(400, `Document doesn't exist`))
      );
    }

    // Check if user owns the document:
    if (user.id !== document.userId) {
      return yield put(
        s_transmit(
          s_updateUserDataError(
            400,
            `You don't have the right permissions to update this document`
          )
        )
      );
    }

    // Filter out ids
    const newDocData = _.omit(docData, ["id", "userId"]);

    // Broadcast document update
    yield put(s_broadcast(clientId, b_documentUpdate(docId, newDocData)));

    // Transmit success message
    yield put(s_transmit(clientId, s_updateUserDataSuccess()));
  } catch (error) {
    // Transmit error message
    yield put(s_transmit(clientId, s_updateUserDataError(500)));
    console.error(error);
  }
}
