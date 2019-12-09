import { actionTypes } from "../actionTypes";

export const b_userJoined = (userId, userData) => ({
  type: actionTypes.B_USER_JOINED,
  userId,
  userData
});
