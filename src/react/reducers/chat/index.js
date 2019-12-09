import { combineReducers } from "redux";
import users, * as fromUsers from "./users";
import documents from "./documents";
import scQueries, * as fromScQueries from "./scQueries";

const chat = combineReducers({
  users,
  documents,
  scQueries
});

export default chat;

export const selectUsers = state => state.users;

export const selectUser = (state, id) => {
  const users = selectUsers(state);
  return fromUsers.selectUser(users, id);
};

export const selectScQuery = (state, id) => fromScQueries(state.scQueries, id);
