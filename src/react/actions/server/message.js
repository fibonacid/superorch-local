import { actionTypes } from "../actionTypes";

export const s_message = (clientId, message) => ({
  type: actionTypes.S_MESSAGE,
  clientId,
  message
});
