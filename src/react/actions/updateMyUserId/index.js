import { actionTypes } from "../actionTypes";

export const updateMyUserId = userId => ({
  type: actionTypes.UPDATE_MY_USER_ID,
  userId
});
