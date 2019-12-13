import _ from "lodash";
import { actionTypes } from "../../actions/actionTypes";
import { takeLatest, select, put, all } from "redux-saga/effects";
import { selectScQueries } from "../../reducers/root";
import { c_createScQuery } from "../../actions/client/crudScQueries";
import { c_createScQueryRequest } from "../../actions/client/requests/createScQueryRequest";
import { c_addMyScQueryId } from "../../actions/client/addMyScQueryId";

export function* c_appendScQueryWatcher() {
  yield takeLatest(actionTypes.C_APPEND_SC_QUERY, c_appendScQuerySaga);
}

export function* c_appendScQuerySaga(action) {
  // Get list of queries
  const scQueries = yield select(state => selectScQueries(state));

  // Calculate next id
  const { id: maxId } = _.maxBy(scQueries, scQuery => scQuery.id) || { id: 0 };
  const nextId = 1 + maxId;

  // Dispatch an action to create a new scQuery
  yield all([
    put(
      c_createScQuery(nextId, {
        ...action.scqData,
        id: nextId
      })
    ),
    put(c_addMyScQueryId(nextId))
  ]);

  const { isLoggedIn } = yield select(state => state.client.status);

  // if client is logged in, send a request to the server
  if (isLoggedIn) {
    yield put(c_createScQueryRequest(action.userData));
  }
}
