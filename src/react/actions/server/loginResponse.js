import { actionTypes } from "../actionTypes";

export const s_loginSuccess = userId => ({
  type: actionTypes.S_LOGIN_SUCCESS,
  userId
});

export const s_loginError = error => ({
  type: actionTypes.S_LOGIN_ERROR,
  error
});
