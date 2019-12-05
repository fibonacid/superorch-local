import { actionTypes } from "./actionTypes";

export const replaceUserList = users => ({
  type: actionTypes.REPLACE_USER_LIST,
  users
});
