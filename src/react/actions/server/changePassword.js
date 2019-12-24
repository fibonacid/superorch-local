import { actionTypes } from "../actionTypes";

export const s_changePassword = password => ({
  type: actionTypes.S_CHANGE_PASSWORD,
  password
});
