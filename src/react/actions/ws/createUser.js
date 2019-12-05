import { actionTypes } from "../actionTypes";

export const wsCreateUser = () => ({
  type: actionTypes.WS_CREATE_USER
});

export const wsCreateUserSuccess = userId => ({
  type: actionTypes.WS_CREATE_USER_SUCCESS,
  userId
});

export const wsCreateUserError = error => ({
  type: actionTypes.WS_CREATE_USER_ERROR,
  error
});
