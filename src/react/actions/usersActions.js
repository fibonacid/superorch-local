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

export const deleteUser = id => ({
  type: actionTypes.DELETE_USER,
  id
});

export const populateUserList = users => ({
  type: actionTypes.USER_LIST,
  users
});

export const userAccepted = (newId, data) => ({
  type: actionTypes.USER_ACCEPTED,
  newId,
  data
});
