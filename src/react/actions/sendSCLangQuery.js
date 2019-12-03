import { actionTypes } from "./actionTypes";

export const sendSCLangQuery = query => ({
  type: actionTypes.SEND_SCLANG_QUERY,
  query
});
