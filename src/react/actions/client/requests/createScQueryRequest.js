import { actionTypes } from "../../actionTypes";

export const c_createScQueryRequest = (scqId, scqData) => ({
  type: actionTypes.C_CREATE_SC_QUERY_REQUEST,
  scqId,
  scqData
});

export const c_createScQuerySuccess = (scqId, scqData) => ({
  type: actionTypes.C_CREATE_SC_QUERY_SUCCESS,
  scqId,
  scqData
});

export const c_createScQueryError = error => ({
  type: actionTypes.C_CREATE_SC_QUERY_ERROR,
  error
});

export const c_createScQueryTimeout = message => ({
  type: actionTypes.C_CREATE_SC_QUERY_TIMEOUT,
  message
});
