import { actionTypes } from "./actionTypes";

export const addUser = (id, data) => ({
  type: actionTypes.ADD_USER,
  id,
  data
});
