import { actionTypes } from "../../../actions/actionTypes";
import { takeEvery, select } from "redux-saga/effects";
import { channels } from "../../../../shared/constants";
//import {c_updateScQuery} from "../../../actions/client/crudScQueries";
import { selectScQuery } from "../../../reducers/root";

export function* c_execScQueryRequestWatcher() {
  yield takeEvery(
    actionTypes.C_EXEC_SC_QUERY_REQUEST,
    c_execScQueryRequestSaga
  );
}

export function* c_execScQueryRequestSaga(action) {
  const { ipcRenderer } = window;
  if (ipcRenderer) {
    // Get query from the store
    const scQuery = yield select(state => selectScQuery(state, action.scqId));

    // Send to electron main process
    const response = yield ipcRenderer.invoke(channels.SUPERCOLLIDER_MESSAGE, {
      message: scQuery.input
    });

    console.log(response);
    console.log(action);
    //yield put(c_updateScQuery())
  }
}
