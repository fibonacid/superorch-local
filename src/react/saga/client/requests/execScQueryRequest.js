import { actionTypes } from "../../../actions/actionTypes";
import { takeEvery, select, put, take } from "redux-saga/effects";
import { channels } from "../../../../shared/constants";
import { selectScQuery } from "../../../reducers/root";
import { c_updateScQuery } from "../../../actions/client/crudScQueries";
import { c_updateScQueryDataRequest } from "../../../actions/client/requests/updateScQueryDataRequest";

export function* c_execScQueryRequestWatcher() {
  yield takeEvery(
    actionTypes.C_EXEC_SC_QUERY_REQUEST,
    c_execScQueryRequestSaga
  );
}

export function* c_execScQueryRequestSaga(action) {
  const { ipcRenderer } = window;

  // If client runs on electron:
  if (ipcRenderer) {
    // Get query from the store
    const scQuery = yield select(state => selectScQuery(state, action.scqId));

    // Send to electron main process
    const response = yield ipcRenderer.invoke(channels.SUPERCOLLIDER_MESSAGE, {
      message: scQuery.input
    });

    const newScqData = {
      output: JSON.stringify(response, null, 1)
    };

    // Store response into the scQuery
    yield put(c_updateScQuery(action.scqId, newScqData));

    const { isLoggedIn } = yield select(state => state.client.status);
    // if client is logged in and the scQuery to update is owned by the user:
    if (isLoggedIn) {
      // send scQuery update request.
      yield put(c_updateScQueryDataRequest(action.scqId, newScqData));
    }
  }
}
