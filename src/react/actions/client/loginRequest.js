import { actionTypes } from "../actionTypes";

export const c_loginRequest = () => ({
  type: actionTypes.C_LOGIN_REQUEST
});

export const c_loginRequestTimeout = message => ({
  type: actionTypes.C_LOGIN_REQUEST_TIMEOUT,
  message
});
