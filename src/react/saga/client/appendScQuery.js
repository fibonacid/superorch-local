import _ from "lodash";
import { actionTypes } from "../../actions/actionTypes";
import { takeLatest, select, put } from "redux-saga/effects";
import { selectScQueries } from "../../reducers/client";
import { c_createScQuery } from "../../actions/client/crudScQueries";
import { c_createScQueryRequest } from "../../actions/client/requests/createScQueryRequest";

export function* c_appendScQueryWatcher() {
  yield takeLatest(actionTypes.C_APPEND_SC_QUERY, c_appendScQuerySaga);
}

export function* c_appendScQuerySaga(action) {
  console.log("c_appendScQuerySaga", action);

  // Get list of queries
  const scQueries = yield select(state => selectScQueries(state));
  // Calculate next id
  const nextId = 1 + _.maxBy(scQueries, scQuery => scQuery.id);

  // Dispatch an action to create a new scQuery
  yield put(
    c_createScQuery(nextId, {
      ...action.scqData,
      id: nextId
    })
  );

  const { isLoggedIn } = yield select(state => state.client.status);

  // if client is logged in, send a request to the server
  if (isLoggedIn) {
    yield put(c_createScQueryRequest(action.userData));
  }
}
