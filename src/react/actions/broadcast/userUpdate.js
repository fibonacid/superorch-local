import { actionTypes } from "../actionTypes";

export const b_userUpdate = (userId, userData) => ({
  type: actionTypes.B_USER_UPDATE,
  userId,
  userData
});
