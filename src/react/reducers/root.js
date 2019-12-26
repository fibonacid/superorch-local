import { combineReducers } from "redux";
import reducers, { selectors } from "../../shared/reducers";
import base from "./base";

const { users, documents, scQueries } = reducers;

const root = combineReducers({
  base,
  users,
  documents,
  scQueries
});

export default root;

export const selectBase = state => state.base;

//
//  selectors from shared directory
//

export const selectUsers = state => state.users;
export const selectDocuments = state => state.documents;
export const selectScQueries = state => state.scQueries;

export const selectDocument = (state, id) => {
  selectors.selectDocument(selectDocuments(state), id);
};

export const selectUser = (state, id) => {
  selectors.selectUser(selectUsers(state), id);
};

export const selectScQuery = (state, id) => {
  selectors.selectScQuery(selectScQueries(state), id);
};
