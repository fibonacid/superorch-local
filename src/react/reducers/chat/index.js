import { combineReducers } from "redux";
import users, * as fromUsers from "./users";
import document from "./document";

const chat = combineReducers({
  users,
  document
});

export default chat;

export const selectUsers = state => state.users;

export const selectUser = (state, id) => {
  const users = selectUsers(state);
  return fromUsers.selectUser(users, id);
};

export const selectUserByLocalId = (state, localId) => {
  const users = selectUsers(state);
  return fromUsers.selectUserByLocalId(users, localId);
};
