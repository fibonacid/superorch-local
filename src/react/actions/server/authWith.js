import { actionTypes } from "../actionTypes";

export const s_authWithPassword = (flag = true) => ({
  type: actionTypes.S_AUTH_WITH_PASSWORD,
  flag
});
