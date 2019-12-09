import { actionTypes } from "../actionTypes";

export const c_createScQuery = (scQueryId, scQueryData) => ({
  type: actionTypes.C_CREATE_SC_QUERY,
  scQueryId,
  scQueryData
});

export const c_updateScQuery = (scQueryId, scQueryData) => ({
  type: actionTypes.C_UPDATE_SC_QUERY,
  scQueryId,
  scQueryData
});

export const c_deleteScQuery = scQueryId => ({
  type: actionTypes.C_DELETE_SC_QUERY,
  id
});
