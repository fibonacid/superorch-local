import { actionTypes } from "../actionTypes";

export const wsScQueryShipped = scQuery => ({
  type: actionTypes.WS_SC_QUERY_SHIPPED,
  scQuery
});
