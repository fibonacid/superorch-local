import { actionTypes } from "../actionTypes";

export const s_clientDisconnected = clientId => ({
  type: actionTypes.S_CLIENT_DISCONNECTED,
  clientId
});
