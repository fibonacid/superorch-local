import { actionTypes } from "../actionTypes";

export const b_scQueryUpdate = (scqId, scqData) => ({
  type: actionTypes.B_SC_QUERY_UPDATE,
  scqId,
  scqData
});
