import { actionTypes } from "../actionTypes";

export const c_logoutRequest = userId => ({
  type: actionTypes.C_LOGOUT_REQUEST,
  userId
});

export const c_logoutRequestTimeout = message => ({
  type: actionTypes.C_LOGOUT_REQUEST_TIMEOUT,
  message
});
