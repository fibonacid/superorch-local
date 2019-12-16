import { actionTypes } from "../actionTypes";

export const c_updateMyScQueryId = (scqId, newId) => ({
  type: actionTypes.C_UPDATE_MY_SC_QUERY_ID,
  scqId,
  newId
});
