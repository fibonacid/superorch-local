import { actionTypes } from "./actionTypes";

export const updateScQuery = (id, data) => ({
  type: actionTypes.UPDATE_SC_QUERY,
  id,
  data
});
