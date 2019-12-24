import { actionTypes } from "../../actionTypes";

export const c_connectionRequest = (url, password) => ({
  type: actionTypes.C_CONNECTION_REQUEST,
  url,
  password
});

export const c_connectionSuccess = () => ({
  type: actionTypes.C_CONNECTION_SUCCESS
});

export const c_connectionError = error => ({
  type: actionTypes.C_CONNECTION_ERROR,
  error
});

export const c_connectionTimeout = message => ({
  type: actionTypes.C_CONNECTION_TIMEOUT,
  message
});
