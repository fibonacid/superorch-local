import { actionTypes } from "../actionTypes";

export const wsCreateScQuery = scQuery => ({
  type: actionTypes.WS_CREATE_SC_QUERY,
  scQuery
});

export const wsCreateScQuerySuccess = scQueryId => ({
  type: actionTypes.WS_CREATE_SC_QUERY_SUCCESS,
  scQueryId
});

export const wsCreateScQueryError = error => ({
  type: actionTypes.WS_CREATE_SC_QUERY_ERROR,
  error
});

export const wsCreateScQueryTimeout = message => ({
  type: actionTypes.WS_CREATE_SC_QUERY_TIMEOUT,
  message
});
