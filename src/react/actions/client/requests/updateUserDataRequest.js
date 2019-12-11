import { actionTypes } from "../../actionTypes";

export const c_updateUserDataRequest = userData => ({
  type: actionTypes.C_UPDATE_USER_DATA_REQUEST,
  userData
});

export const c_updateUserDataSuccess = message => ({
  type: actionTypes.C_UPDATE_USER_DATA_SUCCESS,
  message
});

export const c_updateUserDataError = error => ({
  type: actionTypes.C_UPDATE_USER_DATA_ERROR,
  error
});

export const c_updateUserDataTimeout = message => ({
  type: actionTypes.C_UPDATE_USER_DATA_TIMEOUT,
  message
});
