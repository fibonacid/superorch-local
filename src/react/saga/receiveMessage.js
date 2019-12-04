import { actionTypes } from "../actions/actionTypes";
import { takeEvery, put } from "redux-saga/effects";
import {
  addUser,
  deleteUser,
  populateUserList,
  updateUser,
  userAccepted
} from "../actions/usersActions";
import { updateDocument } from "../actions/documentsActions";
import { executeSCLangQuery } from "../actions/executeSclangQuery";

/**
 * Every time a connection is opened send your username to the server
 */
export function* receiveMessageWatcher() {
  yield takeEvery(actionTypes.WEBSOCKET_MESSAGE, receiveMessageSaga);
}

export function* receiveMessageSaga(action) {
  const { message } = action.payload;
  let data = JSON.parse(message);

  console.log(data);

  switch (data.type) {
    case "USER_ADDED":
      yield put(addUser(data.id, data.data));
      break;
    case "USER_ACCEPTED":
      yield put(userAccepted(data.id));
      yield put(populateUserList(data.data.users));
      break;
    case "USER_UPDATED":
      yield put(updateUser(data.id, data.data));
      break;
    case "USER_DELETED":
      yield put(deleteUser(data.id));
      break;
    case "DOCUMENT_UPDATE":
      yield put(updateDocument(data.data));
      break;
    case "EXECUTE_SCLANG_QUERY":
      yield put(executeSCLangQuery(data.data));
      break;
    default:
      break;
  }
}
