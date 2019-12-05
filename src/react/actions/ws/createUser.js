import { actionTypes } from "../actionTypes";

export const wsCreateUser = user => ({
  type: actionTypes.WS_CREATE_USER,
  user
});

export const wsCreateUserSuccess = userId => ({
  type: actionTypes.WS_CREATE_USER_SUCCESS,
  userId
});

export const wsCreateUserError = error => ({
  type: actionTypes.WS_CREATE_USER_ERROR,
  error
});

export const wsCreateUserTimeout = message => ({
  type: actionTypes.WS_CREATE_USER_ERROR,
  message
});
