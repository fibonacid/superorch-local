import { actionTypes } from "../../actions/actionTypes";
import { statusCodes } from "../../utils/constants";
import { takeLatest, put, select, call } from "redux-saga/effects";
import { s_loginResponseSaga } from "./responses/loginResponse";
import { s_logoutResponseSaga } from "./responses/logoutResponse";
import { s_getUserListResponseSaga } from "./responses/getUserListResponse";
import { s_updateUserDataResponseSaga } from "./responses/updateUserDataResponse";
import { s_createDocumentResponseSaga } from "./responses/createDocumentResponse";
import { s_updateDocumentDataResponseSaga } from "./responses/updateDocumentDataResponse";
import { selectClient } from "../../reducers/root";
import { s_transmit } from "../../actions/server/transmit";
import { s_messageError } from "../../actions/server/message";

export function* s_messageWatcher() {
  yield takeLatest(actionTypes.S_MESSAGE, s_messageSaga);
}

export function* s_messageSaga(action) {
  try {
    // Unpack message
    const { clientId } = action;
    const message = JSON.parse(action.message);

    console.log(`server received a message: ${message.type}`);

    // Find out if client is logged in
    const { isLoggedIn } = yield select(state => selectClient(state, clientId));

    // If message is a login request:
    if (message.type === actionTypes.C_LOGIN_REQUEST) {
      // If client is already logged in:
      if (isLoggedIn) {
        // Send an error message
        yield put(s_messageError(400, `Already logged in`));
      }
      // Else, if client is not logged in
      else {
        // respond to request.
        yield call(s_loginResponseSaga, clientId, message.userData);
      }
    }

    // If client is not logged in:
    if (!isLoggedIn) {
      // Send error message and leave.
      return yield put(
        s_transmit(clientId, s_messageError(400, `Log in is required`))
      );
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
        return yield call(s_getUserListResponseSaga, clientId);
    }
  } catch (error) {
    console.error(error);
    yield put(
      s_transmit(action.clientId, s_messageError(500, statusCodes[500]))
    );
  }
}
