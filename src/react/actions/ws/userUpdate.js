import { actionTypes } from "../actionTypes";

export const wsUserUpdate = (userId, diff) => ({
  type: actionTypes.WS_USER_UPDATE,
  userId,
  diff
});
