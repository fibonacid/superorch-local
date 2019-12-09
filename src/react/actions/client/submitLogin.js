import { actionTypes } from "../actionTypes";

export const c_submitLogin = userData => ({
  type: actionTypes.C_SUBMIT_LOGIN,
  userData
});
