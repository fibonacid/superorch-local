import { actionTypes } from "../../actions/actionTypes";
import { takeLatest, put } from "redux-saga/effects";
import {
  s_loginError,
  s_loginSuccess
} from "../../actions/server/responses/loginResponse";
import { b_userJoined } from "../../actions/broadcast/userJoined";
import { b_userLeft } from "../../actions/broadcast/userLeft";
import { b_userUpdate } from "../../actions/broadcast/userUpdate";
import {
  s_logoutError,
  s_logoutSuccess
} from "../../actions/server/responses/logoutReponse";
import {
  s_getUserListError,
  s_getUserListSuccess
} from "../../actions/server/responses/getUserListResponse";
import {
  s_updateUserDataError,
  s_updateUserDataSuccess
} from "../../actions/server/responses/updateUserDataResponse";
import {
  s_createDocumentError,
  s_createDocumentSuccess
} from "../../actions/server/responses/createDocumentResponse";
import { b_documentCreated } from "../../actions/broadcast/documentCreated";
import { b_documentUpdate } from "../../actions/broadcast/documentUpdate";
import {
  s_updateDocumentDataError,
  s_updateDocumentDataSuccess
} from "../../actions/server/responses/updateDocumentDataResponse";
import {
  s_getDocumentListError,
  s_getDocumentListSuccess
} from "../../actions/server/responses/getDocumentListResponse";
import {
  s_createScQueryError,
  s_createScQuerySuccess
} from "../../actions/server/responses/createScQueryResponse";
import { b_scQueryCreated } from "../../actions/broadcast/scQueryCreated";
import {
  s_getScQueryDataError,
  s_getScQueryDataSuccess
} from "../../actions/server/responses/getScQueryDataResponse";

export function* c_messageWatcher() {
  yield takeLatest(actionTypes.C_MESSAGE, c_messageSaga);
}

export function* c_messageSaga({ payload }) {
  // Unpack message
  const message = JSON.parse(payload.message);

  //console.log(`client received a message: ${message.type}`);

  switch (message.type) {
    case actionTypes.S_LOGIN_SUCCESS:
      return yield put(s_loginSuccess(message.userId));
    case actionTypes.S_LOGIN_ERROR:
      return yield put(s_loginError(message.error));
    case actionTypes.S_LOGOUT_SUCCESS:
      return yield put(s_logoutSuccess());
    case actionTypes.S_LOGOUT_ERROR:
      return yield put(s_logoutError(message.error));
    case actionTypes.S_GET_USER_LIST_SUCCESS:
      return yield put(s_getUserListSuccess(message.userList));
    case actionTypes.S_GET_USER_LIST_ERROR:
      return yield put(s_getUserListError(message.error));
    case actionTypes.S_UPDATE_USER_DATA_SUCCESS:
      return yield put(s_updateUserDataSuccess());
    case actionTypes.S_UPDATE_USER_DATA_ERROR:
      return yield put(s_updateUserDataError(message.error));
    case actionTypes.S_CREATE_DOCUMENT_SUCCESS:
      return yield put(s_createDocumentSuccess(message.docId, message.docData));
    case actionTypes.S_CREATE_DOCUMENT_ERROR:
      return yield put(s_createDocumentError(message));
    case actionTypes.S_UPDATE_DOCUMENT_DATA_SUCCESS:
      return yield put(s_updateDocumentDataSuccess());
    case actionTypes.S_UPDATE_DOCUMENT_DATA_ERROR:
      return yield put(s_updateDocumentDataError(message.error));
    case actionTypes.S_GET_DOCUMENT_LIST_SUCCESS:
      return yield put(s_getDocumentListSuccess(message.docList));
    case actionTypes.S_GET_DOCUMENT_LIST_ERROR:
      return yield put(s_getDocumentListError(message.error));
    case actionTypes.S_CREATE_SC_QUERY_SUCCESS:
      return yield put(s_createScQuerySuccess(message.scqId, message.scqData));
    case actionTypes.S_CREATE_SC_QUERY_ERROR:
      return yield put(s_createScQueryError(message.error));
    case actionTypes.S_GET_SC_QUERY_DATA_SUCCESS:
      return yield put(s_getScQueryDataSuccess(message.scqData));
    case actionTypes.S_GET_SC_QUERY_DATA_ERROR:
      return yield put(s_getScQueryDataError(message.error));
    case actionTypes.B_USER_JOINED:
      return yield put(b_userJoined(message.userId, message.userData));
    case actionTypes.B_USER_UPDATE:
      return yield put(b_userUpdate(message.userId, message.userData));
    case actionTypes.B_USER_LEFT:
      return yield put(b_userLeft(message.userId));
    case actionTypes.B_DOCUMENT_CREATED:
      return yield put(b_documentCreated(message.docId, message.docData));
    case actionTypes.B_DOCUMENT_UPDATE:
      return yield put(b_documentUpdate(message.docId, message.docData));
    case actionTypes.B_SC_QUERY_CREATED:
      return yield put(b_scQueryCreated(message.scqId, message.scqData));
  }
}
