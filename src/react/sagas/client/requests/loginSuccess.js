import { put, select, takeLatest } from "redux-saga/effects";
import { actionTypes } from "../../../actions/actionTypes";
import { c_updateUser } from "../../../actions/client/crudUsers";
import { c_updateMyUserId } from "../../../actions/client/updateMyUserId";
import { c_getUserListRequest } from "../../../actions/client/requests/getUserListRequest";
import { c_createDocumentRequest } from "../../../actions/client/requests/createDocumentRequest";
import { selectDocument } from "../../../reducers/root";
import { displayUser } from "../../../actions/displayUser";

export function* c_loginSuccessWatcher() {
  yield takeLatest(actionTypes.C_LOGIN_SUCCESS, c_loginSuccessSaga);
}

export function* c_loginSuccessSaga(action) {
  // Get default user id
  const { myUserId, myDocId } = yield select(state => state.client.status);
  // Update default user
  yield put(c_updateUser(myUserId, { id: action.userId }));
  // Update myUserId variable
  yield put(c_updateMyUserId(action.userId));
  // Request user list
  yield put(c_getUserListRequest());

  // Send my document
  const document = yield select(state => selectDocument(state, myDocId));

  yield put(c_createDocumentRequest(document));

  // Finally display user on the frontEnd
  yield put(displayUser(action.userId));
}
