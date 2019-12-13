import { actionTypes } from "../../actionTypes";

export const s_createScQuerySuccess = (scqId, scqData) => ({
  type: actionTypes.S_CREATE_SC_QUERY_SUCCESS,
  scqId,
  scqData
});

export const s_createScQueryError = error => ({
  type: actionTypes.S_CREATE_SC_QUERY_ERROR,
  error
});
