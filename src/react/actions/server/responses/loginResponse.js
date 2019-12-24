import { actionTypes } from "../../actionTypes";

export const s_loginSuccess = userId => ({
  type: actionTypes.S_LOGIN_SUCCESS,
  userId
});

export const s_loginError = (status, message) => ({
  type: actionTypes.S_LOGIN_ERROR,
  error: { status, message }
});

export const s_loginAuthRequired = () => ({
  type: actionTypes.S_LOGIN_AUTH_REQUIRED
});

export const s_loginAuthSuccess = () => ({
  type: actionTypes.S_LOGIN_AUTH_SUCCESS
});

export const s_loginAuthError = (status, message) => ({
  type: actionTypes.S_LOGIN_AUTH_ERROR,
  error: { status, message }
});
