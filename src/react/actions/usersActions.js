import { actionTypes } from "./actionTypes";

export const addUser = (id, data) => ({
  type: actionTypes.ADD_USER,
  id,
  data
});

export const updateUser = (id, data) => ({
  type: actionTypes.UPDATE_USER,
  id,
  data
});

export const populateUserList = users => ({
  type: actionTypes.USER_LIST,
  users
});
