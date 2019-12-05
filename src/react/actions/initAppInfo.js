import { actionTypes } from "./actionTypes";

export const initAppInfo = data => ({
  type: actionTypes.INIT_APP_INFO,
  data
});
