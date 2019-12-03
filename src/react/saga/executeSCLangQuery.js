import { actionTypes } from "../actions/actionTypes";
import { takeLatest, select } from "redux-saga/effects";
import _ from "lodash";

export function* executeSCLangQueryWatcher() {
  yield takeLatest(actionTypes.EXECUTE_SCLANG_QUERY, executeSCLangQuerySaga);
}

export function* executeSCLangQuerySaga({ data }) {
  const user = yield select(state =>
    _.find(state.chat.users, user => user.id === data.userId)
  );
  if (user) {
    console.log(`${user.name} sent you this sclang query:\n${data.query}`);
  }
}
