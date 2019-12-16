import { actionTypes } from "../actionTypes";

export const c_createScQuery = (scqId, scqData) => ({
  type: actionTypes.C_CREATE_SC_QUERY,
  scqId,
  scqData
});

export const c_updateScQuery = (scqId, scqData) => ({
  type: actionTypes.C_UPDATE_SC_QUERY,
  scqId,
  scqData
});

export const c_deleteScQuery = scqId => ({
  type: actionTypes.C_DELETE_SC_QUERY,
  scqId
});

export const c_appendScQuery = scqData => ({
  type: actionTypes.C_APPEND_SC_QUERY,
  scqData
});
