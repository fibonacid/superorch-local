import { actionTypes } from "../actionTypes";

export const s_clientConnected = clientId => ({
  type: actionTypes.S_CLIENT_CONNECTED,
  clientId
});
