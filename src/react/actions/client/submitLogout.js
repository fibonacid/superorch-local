import { actionTypes } from "../actionTypes";

export const c_submitLogout = userId => ({
  type: actionTypes.C_SUBMIT_LOGOUT,
  userId
});
