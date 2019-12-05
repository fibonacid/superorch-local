import { actionTypes } from "./actionTypes";

export const deleteUser = id => ({
  type: actionTypes.DELETE_USER,
  id
});
