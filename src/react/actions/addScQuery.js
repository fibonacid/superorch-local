import { actionTypes } from "./actionTypes";

export const addScQuery = (id, data) => ({
  type: actionTypes.ADD_SC_QUERY,
  id,
  data
});
