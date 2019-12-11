import { actionTypes } from "../actionTypes";

export const c_updateUserRequest = () => ({
  type: actionTypes.C_UPDATE_USER_REQUEST
});

export const c_updateUserSuccess = message => ({
  type: actionTypes.C_UPDATE_USER_SUCCESS,
  message
});

export const c_updateUserError = error => ({
  type: actionTypes.C_UPDATE_USER_ERROR,
  error
});

export const c_updateUserTimeout = message => ({
  type: actionTypes.C_UPDATE_USER_TIMEOUT,
  message
});
