import { actionTypes } from "../../../actions/actionTypes";
import { takeLatest, put, race, take, delay } from "redux-saga/effects";
import { send } from "@giantmachines/redux-websocket";
import {
  c_updateScQueryDataError,
  c_updateScQueryDataRequest,
  c_updateScQueryDataSuccess,
  c_updateScQueryDataTimeout
} from "../../../actions/client/requests/updateScQueryDataRequest";

export function* c_updateScQueryDataRequestWatcher() {
  yield takeLatest(
    actionTypes.C_UPDATE_SC_QUERY_DATA_REQUEST,
    c_updateScQueryDataRequestSaga
  );
}

export function* c_updateScQueryDataRequestSaga({ scqId, scqData }) {
  // Send request
  yield put(send(c_updateScQueryDataRequest(scqId, scqData)));

  // start a race between sagas
  const { result, error, timeout } = yield race({
    result: take(actionTypes.S_UPDATE_SC_QUERY_DATA_SUCCESS),
    error: take(actionTypes.S_UPDATE_SC_QUERY_DATA_ERROR),
    timeout: delay(2000, `Request took too long to complete`)
  });

  if (result) {
    // Send success message
    yield put(c_updateScQueryDataSuccess(result.scqId, `scQuery updated`));
  } else if (error) {
    yield put(c_updateScQueryDataError(error));
  } else if (timeout) {
    yield put(c_updateScQueryDataTimeout(timeout));
  }
}
