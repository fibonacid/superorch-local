import { actionTypes } from "./actionTypes";

export const updateClient = (id, data) => ({
  type: actionTypes.UPDATE_CLIENT,
  id,
  data
});
