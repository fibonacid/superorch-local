import { actionTypes } from "../actionTypes";

export const c_loginRequest = userData => ({
  type: actionTypes.C_LOGIN_REQUEST,
  userData
});

export const c_loginRequestTimeout = message => ({
  type: actionTypes.C_LOGIN_REQUEST_TIMEOUT,
  message
});
