import { actionTypes } from "./actionTypes";

export const deleteClient = id => ({
  type: actionTypes.DELETE_CLIENT,
  id
});
