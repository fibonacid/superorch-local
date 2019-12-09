import { actionTypes } from "../actionTypes";

export const s_createUser = (userId, userData) => ({
  type: actionTypes.S_CREATE_USER,
  userId,
  userData
});

export const s_updateUser = (userId, userData) => ({
  type: actionTypes.S_UPDATE_USER,
  userId,
  userData
});

export const s_deleteUser = userId => ({
  type: actionTypes.S_DELETE_USER,
  userId
});

export const s_destroyUser = userId => ({
  type: actionTypes.S_DESTROY_USER,
  userId
});
