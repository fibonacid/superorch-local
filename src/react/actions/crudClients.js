import { actionTypes } from "./actionTypes";

export const createClient = client => ({
  type: actionTypes.CREATE_CLIENT,
  client
});

export const updateClient = (id, data) => ({
  type: actionTypes.UPDATE_CLIENT,
  id,
  data
});

export const deleteClient = id => ({
  type: actionTypes.DELETE_CLIENT,
  id
});

export const destroyClient = id => ({
  type: actionTypes.DESTROY_CLIENT,
  id
});
