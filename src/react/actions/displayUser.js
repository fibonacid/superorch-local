import { actionTypes } from "./actionTypes";

export const displayUser = userId => ({
  type: actionTypes.DISPLAY_USER,
  userId
});
