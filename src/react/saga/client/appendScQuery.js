import _ from "lodash";
import { actionTypes } from "../../actions/actionTypes";
import { takeEvery, select, put } from "redux-saga/effects";
import { selectScQueries } from "../../reducers/root";
import { c_createScQuery } from "../../actions/client/crudScQueries";
import { c_addMyScQueryId } from "../../actions/client/addMyScQueryId";

export function* c_appendScQueryWatcher() {
  yield takeEvery(actionTypes.C_APPEND_SC_QUERY, c_appendScQuerySaga);
}

export function* c_appendScQuerySaga(action) {
  // Get list of queries
  const scQueries = yield select(state => selectScQueries(state));

  // Calculate next id
  const { id: maxId } = _.maxBy(scQueries, scQuery => scQuery.id) || { id: 0 };
  const nextId = 1 + maxId;

  // Store id into client status
  yield put(c_addMyScQueryId(nextId));

  const { myUserId } = yield select(state => state.client.status);

  // Dispatch an action to create a new scQuery
  yield put(
    c_createScQuery(nextId, {
      ...action.scqData,
      id: nextId,
      userId: myUserId
    })
  );
}
