import { actionTypes } from "../actionTypes";

export const c_createUser = (userId, userData) => ({
  type: actionTypes.C_CREATE_USER,
  userId,
  userData
});

export const c_updateUser = (userId, userData) => ({
  type: actionTypes.C_UPDATE_USER,
  userId,
  userData
});

export const c_deleteUser = userId => ({
  type: actionTypes.C_DELETE_USER,
  userId
});

export const c_destroyUser = userId => ({
  type: actionTypes.C_DESTROY_USER,
  userId
});

export const c_replaceUserList = userList => ({
  type: actionTypes.C_REPLACE_USER_LIST,
  userList
});
