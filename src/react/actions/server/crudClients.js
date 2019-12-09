import { actionTypes } from "../actionTypes";

export const s_createClient = (clientId, clientData) => ({
  type: actionTypes.S_CREATE_CLIENT,
  clientId,
  clientData
});

export const s_updateClient = (clientId, clientData) => ({
  type: actionTypes.S_UPDATE_CLIENT,
  clientId,
  clientData
});

export const s_deleteClient = clientId => ({
  type: actionTypes.S_DELETE_CLIENT,
  clientId
});

export const s_destroyClient = clientId => ({
  type: actionTypes.S_DESTROY_CLIENT,
  clientId
});
