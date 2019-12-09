import { actionTypes } from "../actionTypes";

export const c_logoutRequest = userId => ({
  type: actionTypes.C_LOGOUT_REQUEST,
  userId
});
