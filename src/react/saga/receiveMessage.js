import { actionTypes } from "../actions/actionTypes";
import { takeEvery, put } from "redux-saga/effects";
import { populateUserList } from "../actions/usersActions";
import { updateDocument } from "../actions/updateDocument";
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

  switch (data.type) {
    case "USER_LIST_UPDATE":
      yield put(populateUserList(data.users));
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
