import { combineReducers } from "redux";
import users, * as fromUsers from "./users";
import document from "./document";
import scQueries, * as fromScQueries from "./scQueries";

const chat = combineReducers({
  users,
  document,
  scQueries
});

export default chat;

export const selectUsers = state => state.users;

export const selectUser = (state, id) => {
  const users = selectUsers(state);
  return fromUsers.selectUser(users, id);
};

export const selectScQuery = (state, id) => fromScQueries(state.scQueries, id);
