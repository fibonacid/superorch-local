import { actionTypes } from "../actionTypes";

export const s_transmit = (clientId, message) => ({
  type: actionTypes.S_TRANSMIT,
  clientId,
  message
});
