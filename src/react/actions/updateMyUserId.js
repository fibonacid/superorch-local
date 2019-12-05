import { actionTypes } from "./actionTypes";

export const updateMyUserId = newId => ({
  type: actionTypes.UPDATE_MY_USER_ID,
  newId
});
