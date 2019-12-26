import { actionTypes } from "../actionTypes";

export const createUser = (userId, userData) => ({
  type: actionTypes.CREATE_USER,
  userId,
  userData
});

export const updateUser = (userId, userData) => ({
  type: actionTypes.UPDATE_USER,
  userId,
  userData
});

export const deleteUser = userId => ({
  type: actionTypes.DELETE_USER,
  userId
});

export const destroyUser = userId => ({
  type: actionTypes.DESTROY_USER,
  userId
});

export const replaceUserList = userList => ({
  type: actionTypes.REPLACE_USER_LIST,
  userList
});
