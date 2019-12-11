import _ from "lodash";
import { actionTypes } from "../../actions/actionTypes";
import { takeLatest, select, put } from "redux-saga/effects";
import { selectDocuments } from "../../reducers/root";
import { c_createDocument } from "../../actions/client/crudDocuments";
import { c_addMyDocId } from "../../actions/client/updateMyDocIds";

export function* c_appendDocumentWatcher() {
  yield takeLatest(actionTypes.C_APPEND_DOCUMENT, c_appendDocumentSaga);
}

export function* c_appendDocumentSaga(action) {
  console.log("c_appendDocumentSaga", action);

  // Get documents
  const documents = yield select(state => selectDocuments(state));

  let nextId = 0;

  if (documents.length > 0) {
    // Compute next id
    const { id } = _.maxBy(documents, doc => doc.id);
    nextId = id + 1;
  }

  // Store new document
  yield put(c_createDocument(nextId, action.docData));

  // Add id to the myDocIds array
  yield put(c_addMyDocId(nextId));
}
