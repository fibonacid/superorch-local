import { actionTypes } from "../../actions/actionTypes";
import { takeLatest, put } from "redux-saga/effects";

export function* c_messageWatcher() {
  yield takeLatest(actionTypes.C_MESSAGE, c_messageSaga);
}

export function* c_messageSaga({ payload }) {
  // Unpack message
  const message = JSON.parse(payload.message);

  switch (message.type) {
    case actionTypes.S_LOGIN_SUCCESS:
    case actionTypes.S_LOGIN_ERROR:
    case actionTypes.S_LOGOUT_SUCCESS:
    case actionTypes.S_LOGOUT_ERROR:
    case actionTypes.S_GET_USER_LIST_SUCCESS:
    case actionTypes.S_GET_USER_LIST_ERROR:
    case actionTypes.S_UPDATE_USER_DATA_SUCCESS:
    case actionTypes.S_UPDATE_USER_DATA_ERROR:
    case actionTypes.S_CREATE_DOCUMENT_SUCCESS:
    case actionTypes.S_CREATE_DOCUMENT_ERROR:
    case actionTypes.S_UPDATE_DOCUMENT_DATA_SUCCESS:
    case actionTypes.S_UPDATE_DOCUMENT_DATA_ERROR:
    case actionTypes.S_GET_DOCUMENT_LIST_SUCCESS:
    case actionTypes.S_GET_DOCUMENT_LIST_ERROR:
    case actionTypes.S_CREATE_SC_QUERY_SUCCESS:
    case actionTypes.S_CREATE_SC_QUERY_ERROR:
    case actionTypes.S_UPDATE_SC_QUERY_DATA_SUCCESS:
    case actionTypes.S_UPDATE_SC_QUERY_DATA_ERROR:
    case actionTypes.S_GET_SC_QUERY_DATA_SUCCESS:
    case actionTypes.S_GET_SC_QUERY_DATA_ERROR:
    case actionTypes.B_USER_JOINED:
    case actionTypes.B_USER_UPDATE:
    case actionTypes.B_USER_LEFT:
    case actionTypes.B_DOCUMENT_CREATED:
    case actionTypes.B_DOCUMENT_UPDATE:
    case actionTypes.B_SC_QUERY_CREATED:
    case actionTypes.B_SC_QUERY_UPDATE:
      return yield put(message);
    default:
      console.log(`client received a message: ${message.type}`);
  }
}
