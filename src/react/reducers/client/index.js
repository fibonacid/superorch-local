import { combineReducers } from "redux";
import users, * as fromUsers from "../../../shared/reducers/users";
import documents, * as fromDocuments from "../../../shared/reducers/documents";
import scQueries, * as fromScQueries from "../../../shared/reducers/scQueries";
import status from "./status";

const client = combineReducers({
  status,
  users,
  documents,
  scQueries
});

export default client;

export const selectUsers = state => state.users;

export const selectUser = (state, id) => fromUsers.selectUser(state.users, id);

export const selectDocuments = state => state.documents;

export const selectDocument = (state, id) =>
  fromDocuments.selectDocument(state.documents, id);

export const selectScQueries = state => state.scQueries;

export const selectScQuery = (state, id) =>
  fromScQueries.selectScQuery(state.scQueries, id);
