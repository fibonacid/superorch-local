import { actionTypes } from "../../../actions/actionTypes";
import { takeEvery, put, take, delay, race, all } from "redux-saga/effects";
import { send } from "@giantmachines/redux-websocket";
import {
  c_createScQueryError,
  c_createScQueryRequest,
  c_createScQuerySuccess,
  c_createScQueryTimeout
} from "../../../actions/client/requests/createScQueryRequest";
import { c_updateScQuery } from "../../../actions/client/crudScQueries";
import { c_updateMyScQueryId } from "../../../actions/client/updateMyScQueryId";

export function* c_createScQueryRequestWatcher() {
  yield takeEvery(
    actionTypes.C_CREATE_SC_QUERY_REQUEST,
    c_createScQueryRequestSaga
  );
}

export function* c_createScQueryRequestSaga(action) {
  yield put(send(c_createScQueryRequest(action.scqId, action.scqData)));

  // start a race between sagas
  const { result, error, timeout } = yield race({
    result: take(actionTypes.S_CREATE_SC_QUERY_SUCCESS),
    error: take(actionTypes.S_CREATE_SC_QUERY_ERROR),
    timeout: delay(2000, `Request took too long to complete`)
  });

  if (result) {
    // Updated scQuery id
    yield all([
      put(c_updateScQuery(action.scqId, result.scqData)),
      put(c_updateMyScQueryId(action.scqId, result.scqId))
    ]);

    // Dispatch success message
    yield put(c_createScQuerySuccess(`supercollider query created`));
  } else if (error) {
    console.error(error);
    yield put(c_createScQueryError(error));
  } else if (timeout) {
    console.error(timeout);
    yield put(c_createScQueryTimeout(timeout));
  }
}
