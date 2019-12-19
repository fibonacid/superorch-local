import { actionTypes } from "../../actions/actionTypes";
import { statusCodes } from "../../utils/constants";
import { takeLatest, put, select, call } from "redux-saga/effects";
import { s_loginResponseSaga } from "./responses/loginResponse";
import { s_logoutResponseSaga } from "./responses/logoutResponse";
import { s_getUserListResponseSaga } from "./responses/getUserListResponse";
import { s_updateUserDataResponseSaga } from "./responses/updateUserDataResponse";
import { s_createDocumentResponseSaga } from "./responses/createDocumentResponse";
import { s_updateDocumentDataResponseSaga } from "./responses/updateDocumentDataResponse";
import { s_getDocumentListResponseSaga } from "./responses/getDocumentListResponse";
import { selectClient } from "../../reducers/root";
import { s_transmit } from "../../actions/server/transmit";
import { s_messageError } from "../../actions/server/message";
import { s_createScQueryResponseSaga } from "./responses/createScQueryResponse";
import { s_getScQueryDataResponseSaga } from "./responses/getScQueryDataResponse";
import { s_updateScQueryDataResponseSaga } from "./responses/updateScQueryDataResponse";

export function testFunction() {}

export function* s_messageWatcher() {
  yield takeLatest(actionTypes.S_MESSAGE, s_messageSaga);
}

export function* s_messageSaga(action) {
  try {
    // If app runs on a test environment
    // allow allow to throw errors programmatically
    if (process.env.NODE_ENV === "test") {
      yield call(testFunction);
    }

    // Unpack message
    const { clientId } = action;
    const message = JSON.parse(action.message);

    // Find out if client is logged in
    const { isLoggedIn } = yield select(state => selectClient(state, clientId));

    // If message is a login request:
    if (message.type === actionTypes.C_LOGIN_REQUEST) {
      // If client is already logged in:
      if (isLoggedIn) {
        // Send an error message and leave.
        const message = s_messageError(400, `Already logged in`);
        console.error(message.error);
        return yield put(s_transmit(clientId, message));
      }
      // Else, if client is not logged in:
      else {
        // respond to request and leave.
        return yield call(s_loginResponseSaga, clientId, message.userData);
      }
    } else if (!isLoggedIn) {
      // If client is not logged in:
      // Send error message and leave.
      const message = s_messageError(400, `Log in is required`);
      console.error(message.error);
      return yield put(s_transmit(clientId, message));
    }

    // Handle actions embedded in the message
    switch (message.type) {
      case actionTypes.C_LOGOUT_REQUEST:
        return yield call(s_logoutResponseSaga, clientId);
      case actionTypes.C_GET_USER_LIST_REQUEST:
        return yield call(s_getUserListResponseSaga, clientId);
      case actionTypes.C_UPDATE_USER_DATA_REQUEST:
        return yield call(
          s_updateUserDataResponseSaga,
          clientId,
          message.userData
        );
      case actionTypes.C_CREATE_DOCUMENT_REQUEST:
        return yield call(
          s_createDocumentResponseSaga,
          clientId,
          message.docData
        );
      case actionTypes.C_UPDATE_DOCUMENT_DATA_REQUEST:
        return yield call(
          s_updateDocumentDataResponseSaga,
          clientId,
          message.docId,
          message.docData
        );
      case actionTypes.C_GET_DOCUMENT_LIST_REQUEST:
        return yield call(s_getDocumentListResponseSaga, clientId);
      case actionTypes.C_CREATE_SC_QUERY_REQUEST:
        return yield call(
          s_createScQueryResponseSaga,
          clientId,
          message.scqData
        );
      case actionTypes.C_GET_SC_QUERY_DATA_REQUEST:
        return yield call(
          s_getScQueryDataResponseSaga,
          clientId,
          message.scqId
        );
      case actionTypes.C_UPDATE_SC_QUERY_DATA_REQUEST:
        return yield call(
          s_updateScQueryDataResponseSaga,
          clientId,
          message.scqId,
          message.scqData
        );
      default:
        console.log(`server received a message: ${message.type}`);
        break;
    }
  } catch (error) {
    yield put(
      s_transmit(action.clientId, s_messageError(500, statusCodes[500]))
    );
    if (process.env.NODE_ENV !== "test") {
      console.error(error);
    }
  }
}
