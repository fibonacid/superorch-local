import { actionTypes } from "../actionTypes";

export const s_broadcast = (clientId, message) => ({
  type: actionTypes.S_BROADCAST,
  clientId,
  message
});
