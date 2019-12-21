import { actionTypes } from "../../../actions/actionTypes";
import { put, select, takeLatest } from "redux-saga/effects";
import { c_updateMyDocId } from "../../../actions/client/updateMyDocId";
import { c_updateDocument } from "../../../actions/client/crudDocuments";
import { c_getDocumentListRequest } from "../../../actions/client/requests/getDocumentListRequest";

export function* c_createDocumentSuccessWatcher() {
  yield takeLatest(
    actionTypes.C_CREATE_SC_QUERY_SUCCESS,
    c_createDocumentSuccessSaga
  );
}

export function* c_createDocumentSuccessSaga(action) {
  // Replace myDocId with new one:
  const { myDocId: oldDocId } = yield select(state => state.client.status);
  yield put(c_updateMyDocId(action.docId));

  // Update document with new id
  yield put(
    c_updateDocument(oldDocId, {
      id: action.docId,
      ...action.docData
    })
  );

  // Request  document list
  yield put(c_getDocumentListRequest());
}
