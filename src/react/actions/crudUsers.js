import { actionTypes } from "./actionTypes";

export const createUser = (id, data) => ({
  type: actionTypes.CREATE_USER,
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

export const destroyUser = id => ({
  type: actionTypes.DESTROY_USER,
  id
});

export const replaceUserList = userList => ({
  type: actionTypes.REPLACE_USER_LIST,
  userList
});
