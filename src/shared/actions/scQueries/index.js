import { actionTypes } from "../../../react/actions/actionTypes";

export const createScQuery = (scqId, scqData) => ({
  type: actionTypes.CREATE_SC_QUERY,
  scqId,
  scqData
});

export const updateScQuery = (scqId, scqData) => ({
  type: actionTypes.UPDATE_SC_QUERY,
  scqId,
  scqData
});

export const deleteScQuery = scqId => ({
  type: actionTypes.DELETE_SC_QUERY,
  scqId
});

export const appendScQuery = scqData => ({
  type: actionTypes.APPEND_SC_QUERY,
  scqData
});
