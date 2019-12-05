import { actionTypes } from "./actionTypes";

export const updateUser = (id, data) => ({
  type: actionTypes.UPDATE_USER,
  id,
  data
});
