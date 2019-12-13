import { actionTypes } from "../../../actions/actionTypes";
import { takeEvery, put, take, delay, race } from "redux-saga/effects";
import { send } from "@giantmachines/redux-websocket";
import {
  c_createScQueryError,
  c_createScQueryRequest,
  c_createScQuerySuccess,
  c_createScQueryTimeout
} from "../../../actions/client/requests/createScQueryRequest";

export function* c_createScQueryRequestWatcher() {
  yield takeEvery(
    actionTypes.C_CREATE_SC_QUERY_REQUEST,
    c_createScQueryRequestSaga
  );
}

export function* c_createScQueryRequestSaga(action) {
  yield put(send(c_createScQueryRequest(action.scqData)));

  // start a race between sagas
  const { result, error, timeout } = yield race({
    result: take(actionTypes.S_CREATE_SC_QUERY_SUCCESS),
    error: take(actionTypes.S_CREATE_SC_QUERY_ERROR),
    timeout: delay(2000, `Request took too long to complete`)
  });

  if (result) {
    console.log("success", result);
    yield put(
      c_createScQuerySuccess(
        result.scqId,
        result.scqData,
        `supercollider query created`
      )
    );
  } else if (error) {
    console.error(error);
    yield put(c_createScQueryError(error));
  } else if (timeout) {
    console.error(timeout);
    yield put(c_createScQueryTimeout(timeout));
  }
}
