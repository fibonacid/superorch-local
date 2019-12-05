import { actionTypes } from "./actionTypes";

export const swapUserId = newId => ({
  type: actionTypes.SWAP_USER_ID,
  newId
});
