import { actionTypes } from "../../actionTypes";

export const c_getScQueryRequest = scqId => ({
  type: actionTypes.C_GET_SC_QUERY_REQUEST,
  scqId
});

export const c_getScQuerySuccess = (scqData, message) => ({
  type: actionTypes.C_GET_SC_QUERY_SUCCESS,
  scqData,
  message
});

export const c_getScQueryError = error => ({
  type: actionTypes.C_GET_SC_QUERY_ERROR,
  error
});

export const c_getScQueryTimeout = message => ({
  type: actionTypes.C_GET_SC_QUERY_TIMEOUT,
  message
});
