import { actionTypes } from "../../actionTypes";

export const c_updateScQueryDataRequest = (scqId, scqData) => ({
  type: actionTypes.C_UPDATE_SC_QUERY_DATA_REQUEST,
  scqId,
  scqData
});

export const c_updateScQueryDataSuccess = message => ({
  type: actionTypes.C_UPDATE_SC_QUERY_DATA_SUCCESS,
  message
});

export const c_updateScQueryDataError = error => ({
  type: actionTypes.C_UPDATE_SC_QUERY_DATA_ERROR,
  error
});

export const c_updateScQueryDataTimeout = message => ({
  type: actionTypes.C_UPDATE_SC_QUERY_DATA_TIMEOUT,
  message
});
