import { actionTypes } from "../actionTypes";

export const b_scQueryCreated = (scqId, scqData) => ({
  type: actionTypes.B_SC_QUERY_CREATED,
  scqId,
  scqData
});
