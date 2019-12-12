import { put, select, takeLatest, all } from "redux-saga/effects";
import { actionTypes } from "../../../actions/actionTypes";
import { c_updateUser } from "../../../actions/client/crudUsers";
import { c_updateMyUserId } from "../../../actions/client/updateMyUserId";
import { c_getUserListRequest } from "../../../actions/client/requests/getUserListRequest";
import { c_createDocumentRequest } from "../../../actions/client/requests/createDocumentRequest";
import { selectDocuments } from "../../../reducers/root";

export function* c_loginSuccessWatcher() {
  yield takeLatest(actionTypes.C_LOGIN_SUCCESS, c_loginSuccessSaga);
}

export function* c_loginSuccessSaga(action) {
  console.log(action.message);
  // Get default user id
  const { myUserId } = yield select(state => state.wsclient);
  // Update default user
  yield put(c_updateUser(myUserId, { id: action.userId }));
  // Update myUserId variable
  yield put(c_updateMyUserId(action.userId));

  // Request a user list
  yield put(c_getUserListRequest());

  // Send my documents
  const { myDocIds } = yield select(state => state.wsclient);
  const documents = yield select(state => selectDocuments(state));

  yield all(
    documents
      // Filter out documents owned by other users
      .filter(document => myDocIds.indexOf(document.id) !== -1)
      .map(document => put(c_createDocumentRequest(document)))
  );
}
