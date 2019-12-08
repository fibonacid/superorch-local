import { actionTypes } from "../actionTypes";

export const wsScQueryUpdate = (scQueryId, diff) => ({
  type: actionTypes.WS_SC_QUERY_UPDATE,
  scQueryId,
  diff
});
