import { actionTypes } from "../actionTypes";

export const updateMyScQueryId = (scqId, newId) => ({
  type: actionTypes.UPDATE_MY_SC_QUERY_ID,
  scqId,
  newId
});
