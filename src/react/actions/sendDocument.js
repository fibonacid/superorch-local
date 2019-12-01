import {actionTypes} from "./actionTypes";

export const sendDocument = (data) => ({
  type: actionTypes.SEND_DOCUMENT,
  data
});
