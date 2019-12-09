import { actionTypes } from "../actionTypes";

export const c_loginRequest = userData => ({
  type: actionTypes.C_LOGIN_REQUEST,
  userData
});
