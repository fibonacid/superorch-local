import _ from "lodash";
import { call, put, select } from "redux-saga/effects";
import {
  selectClient,
  selectUser,
  selectDocument
} from "../../../reducers/root";
import { s_transmit } from "../../../actions/server/transmit";
import {
  s_updateDocumentDataError,
  s_updateDocumentDataSuccess
} from "../../../actions/server/responses/updateDocumentDataResponse";
import { s_broadcast } from "../../../actions/server/broadcast";
import { b_documentUpdate } from "../../../actions/broadcast/documentUpdate";
import { testFunction } from "../../../utils/testing";
import { statusCodes } from "../../../utils/constants";

export function* s_updateDocumentDataResponseSaga(clientId, docId, docData) {
  try {
    // Call testFunction to enable test code injection
    if (process.env.NODE_ENV === "test") {
      yield call(testFunction);
    }

    // Get user associated with the client
    const client = yield select(state => selectClient(state, clientId));
    const user = yield select(state => selectUser(state, client.userId));
    const document = yield select(state => selectDocument(state, docId));

    // Check if document exists:
    if (!document) {
      const message = `Document with is ${docId} doesn't exist`;
      console.error(message);
      return yield put(
        s_transmit(clientId, s_updateDocumentDataError(404, message))
      );
    }

    // Check if user owns the document:
    if (user.id !== document.userId) {
      const message =
        "You don't have the right permissions to update this document";
      process.env.NODE_ENV !== "test" && console.error(message);
      return yield put(
        s_transmit(clientId, s_updateDocumentDataError(400, message))
      );
    }

    // Filter out ids
    const newDocData = _.omit(docData, ["id", "userId"]);

    // Broadcast document update
    yield put(s_broadcast(clientId, b_documentUpdate(docId, newDocData)));

    // Transmit success message
    yield put(s_transmit(clientId, s_updateDocumentDataSuccess()));
  } catch (error) {
    // Transmit error message
    yield put(
      s_transmit(clientId, s_updateDocumentDataError(500, statusCodes[500]))
    );
    console.error(error);
  }
}
