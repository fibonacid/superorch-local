import { actionTypes } from "../../actionTypes";

export const c_loginRequest = password => ({
  type: actionTypes.C_LOGIN_REQUEST,
  password
});

export const c_loginSuccess = (userId, message) => ({
  type: actionTypes.C_LOGIN_SUCCESS,
  userId,
  message
});

export const c_loginError = error => ({
  type: actionTypes.C_LOGIN_ERROR,
  error
});

export const c_loginTimeout = message => ({
  type: actionTypes.C_LOGIN_TIMEOUT,
  message
});
