import { actionTypes } from "../../actionTypes";

export const s_updateUserDataSuccess = () => ({
  type: actionTypes.S_UPDATE_USER_DATA_SUCCESS
});

export const s_updateUserDataError = error => ({
  type: actionTypes.S_UPDATE_USER_DATA_ERROR,
  error
});
