import { actionTypes } from "../../actionTypes";

export const s_logoutSuccess = userId => ({
  type: actionTypes.S_LOGOUT_SUCCESS,
  userId
});

export const s_logoutError = (status, message) => ({
  type: actionTypes.S_LOGOUT_ERROR,
  error: { status, message }
});
