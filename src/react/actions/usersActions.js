import {actionTypes} from "./actionTypes";

export const addUser = name => ({
  type: actionTypes.ADD_USER,
  name
});

export const populateUserList = (users) => ({
  type: actionTypes.USER_LIST,
  users
});
