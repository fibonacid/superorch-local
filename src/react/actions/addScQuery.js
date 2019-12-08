import { actionTypes } from "./actionTypes";

// todo: remove id from action

export const addScQuery = (id, data) => ({
  type: actionTypes.ADD_SC_QUERY,
  id,
  data
});
