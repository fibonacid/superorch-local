import { combineReducers } from "redux";
import users, * as fromUsers from "./users";
import documents, * as fromDocuments from "./documents";
import clients, * as fromClients from "./clients";
import scQueries, * as fromScQueries from "./scQueries";

const chat = combineReducers({
  clients,
  users,
  documents,
  scQueries
});

export default chat;

export const selectClients = state => state.clients;

export const selectClient = (state, id) =>
  fromClients.selectClient(state.clients, id);

export const selectUsers = state => state.users;

export const selectUser = (state, id) => fromUsers.selectUser(state.users, id);

export const selectDocuments = state => state.documents;

export const selectDocument = (state, id) =>
  fromDocuments.selectDocument(state.documents, id);

export const selectScQueries = state => state.scQueries;

export const selectScQuery = (state, id) =>
  fromScQueries.selectScQuery(state.scQueries, id);
