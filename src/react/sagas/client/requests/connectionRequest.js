import { actionTypes } from "../../../actions/actionTypes";
import { takeLatest, put, race, take, delay } from "redux-saga/effects";
import { connect } from "@giantmachines/redux-websocket";
import {
  c_connectionError,
  c_connectionSuccess,
  c_connectionTimeout
} from "../../../actions/client/requests/connectionRequest";
import { c_loginRequest } from "../../../actions/client/requests/loginRequest";

/**
 *
 * @returns {IterableIterator<ForkEffect>}
 */
export function* c_connectionRequestWatcher() {
  yield takeLatest(actionTypes.C_CONNECTION_REQUEST, c_connectionRequestSaga);
}

/**
 *
 * @param action
 * @returns {IterableIterator<PutEffect<{type: *, message: *}>|PutEffect<BuiltAction<any>>|PutEffect<{docId, type}>|PutEffect<{type: *, error: *}>|PutEffect<{docId: *, type: *, message: *}>|PutEffect<{docId: *, type: *, docData: *}>|RaceEffect<<"TAKE", TakeEffectDescriptor> | <"CALL", CallEffectDescriptor>>>}
 */
export function* c_connectionRequestSaga(action) {
  // Send request
  yield put(connect(action.url));

  // start a race between sagas
  const { result, serverError, clientError, timeout } = yield race({
    result: take(actionTypes.S_CONNECTION_SUCCESS),
    clientError: take(actionTypes.C_ERROR),
    serverError: take(actionTypes.S_CONNECTION_ERROR),
    timeout: delay(2000, `Request took too long to complete`)
  });

  if (result) {
    yield put(c_connectionSuccess());
    yield put(c_loginRequest(action.password));
  } else if (clientError) {
    yield put(c_connectionError(clientError.error));
  } else if (serverError) {
    yield put(c_connectionError(serverError.error));
  } else if (timeout) {
    yield put(c_connectionTimeout(timeout));
  }
}
