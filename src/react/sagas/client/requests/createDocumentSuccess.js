import { put, select, takeLatest } from "redux-saga/effects";
import { actionTypes } from "../../../actions/actionTypes";
import actions from "../../../actions";
import { c_getDocumentListRequest } from "../../../actions/client/requests/getDocumentListRequest";

// todo: include in actions
import { c_updateMyDocId } from "../../../actions/client/updateMyDocId";

const { updateDocument } = actions;

export function* c_createDocumentSuccessWatcher() {
  yield takeLatest(
    actionTypes.C_CREATE_DOCUMENT_SUCCESS,
    c_createDocumentSuccessSaga
  );
}

export function* c_createDocumentSuccessSaga(action) {
  // Replace myDocId with new one:
  const { myDocId: oldDocId } = yield select(state => state.client.status);
  yield put(c_updateMyDocId(action.docId));

  // Update document with new id
  yield put(
    updateDocument(oldDocId, {
      id: action.docId,
      ...action.docData
    })
  );

  // Request  document list
  yield put(c_getDocumentListRequest());
}
