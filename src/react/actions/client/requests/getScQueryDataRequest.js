import { actionTypes } from "../../actionTypes";

export const c_getScQueryDataRequest = scqId => ({
  type: actionTypes.C_GET_SC_QUERY_DATA_REQUEST,
  scqId
});

export const c_getScQueryDataSuccess = (scqData, message) => ({
  type: actionTypes.C_GET_SC_QUERY_DATA_SUCCESS,
  scqData,
  message
});

export const c_getScQueryDataError = error => ({
  type: actionTypes.C_GET_SC_QUERY_DATA_ERROR,
  error
});

export const c_getScQueryDataTimeout = message => ({
  type: actionTypes.C_GET_SC_QUERY_DATA_TIMEOUT,
  message
});
