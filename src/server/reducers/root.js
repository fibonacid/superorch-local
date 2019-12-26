import { combineReducers } from "redux";
import sharedReducers from "../../shared/reducers";

const { users, documents, scQueries } = sharedReducers;

const root = combineReducers({
  users,
  documents,
  scQueries
});

export default root;
