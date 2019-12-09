import { actionTypes } from "../actionTypes";

export const s_createScQuery = (scQueryId, scQueryData) => ({
  type: actionTypes.S_CREATE_SC_QUERY,
  scQueryId,
  scQueryData
});

export const s_updateScQuery = (scQueryId, scQueryData) => ({
  type: actionTypes.S_UPDATE_SC_QUERY,
  scQueryId,
  scQueryData
});

export const s_deleteScQuery = scQueryId => ({
  type: actionTypes.S_DELETE_SC_QUERY,
  scQueryId
});
