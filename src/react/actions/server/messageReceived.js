import { actionTypes } from "../actionTypes";

export const s_messageReceived = (clientId, message) => ({
  type: actionTypes.S_MESSAGE_RECEIVED,
  clientId,
  message
});
