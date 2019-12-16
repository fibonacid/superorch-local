import { actionTypes } from "../../actionTypes";

export const s_getScQueryDataSuccess = scqData => ({
  type: actionTypes.S_GET_SC_QUERY_DATA_SUCCESS,
  scqData
});

export const s_getScQueryDataError = (status, message) => ({
  type: actionTypes.S_GET_SC_QUERY_DATA_ERROR,
  error: { status, message }
});
