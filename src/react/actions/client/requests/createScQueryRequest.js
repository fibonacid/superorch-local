import { actionTypes } from "../../actionTypes";

export const c_createScQueryRequest = scqData => ({
  type: actionTypes.C_CREATE_SC_QUERY_REQUEST,
  scqData
});

export const c_createScQuerySuccess = (scqId, scqData, message) => ({
  type: actionTypes.C_CREATE_SC_QUERY_SUCCESS,
  scqId,
  scqData,
  message
});

export const c_createScQueryError = error => ({
  type: actionTypes.C_CREATE_SC_QUERY_ERROR,
  error
});

export const c_createScQueryTimeout = message => ({
  type: actionTypes.C_CREATE_SC_QUERY_TIMEOUT,
  message
});
