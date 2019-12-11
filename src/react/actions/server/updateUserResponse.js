import { actionTypes } from "../actionTypes";

export const s_updateUserSuccess = () => ({
  type: actionTypes.S_UPDATE_USER_SUCCESS
});

export const s_updateUserError = error => ({
  type: actionTypes.S_UPDATE_USER_ERROR,
  error
});
