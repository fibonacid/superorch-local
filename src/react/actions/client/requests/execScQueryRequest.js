import { actionTypes } from "../../actionTypes";

export const c_execScQueryRequest = scqId => ({
  type: actionTypes.C_EXEC_SC_QUERY_REQUEST,
  scqId
});

export const c_execScQuerySuccess = message => ({
  type: actionTypes.C_EXEC_SC_QUERY_SUCCESS,
  message
});

export const c_execScQueryError = error => ({
  type: actionTypes.C_EXEC_SC_QUERY_ERROR,
  error
});

export const c_execScQueryTimeout = message => ({
  type: actionTypes.C_EXEC_SC_QUERY_TIMEOUT,
  message
});
