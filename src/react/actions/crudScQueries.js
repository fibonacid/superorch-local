import { actionTypes } from "./actionTypes";

export const createScQuery = scQuery => ({
  type: actionTypes.CREATE_SC_QUERY,
  scQuery
});

export const updateScQuery = (id, data) => ({
  type: actionTypes.UPDATE_SC_QUERY,
  id,
  data
});

export const deleteScQuery = id => ({
  type: actionTypes.DELETE_SC_QUERY,
  id
});
