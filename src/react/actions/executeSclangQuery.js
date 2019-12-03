import { actionTypes } from "./actionTypes";

export const executeSCLangQuery = data => ({
  type: actionTypes.EXECUTE_SCLANG_QUERY,
  data
});
