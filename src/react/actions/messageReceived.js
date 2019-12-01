import {actionTypes} from "./actionTypes";

export const messageReceived = (data) => ({
  type: actionTypes.MESSAGE_RECEIVED,
  data
});
