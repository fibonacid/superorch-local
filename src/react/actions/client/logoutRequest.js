import { actionTypes } from "../actionTypes";

export const c_logoutRequest = userId => ({
  type: actionTypes.C_LOGOUT_REQUEST,
  userId
});

export const c_logoutSuccess = message => ({
  type: actionTypes.C_LOGOUT_SUCCESS,
  message
});

export const c_logoutError = error => ({
  type: actionTypes.C_LOGOUT_ERROR,
  error
});

export const c_logoutTimeout = message => ({
  type: actionTypes.C_LOGOUT_TIMEOUT,
  message
});
