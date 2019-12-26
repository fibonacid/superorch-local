import { actionTypes } from "../actionTypes";

export const removeMyScQueryId = scqId => ({
  type: actionTypes.REMOVE_MY_SC_QUERY_ID,
  scqId
});
