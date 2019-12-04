import { actionTypes } from "./actionTypes";

export const addDocument = id => ({
  type: actionTypes.ADD_DOCUMENT,
  id
});

export const updateDocument = (id, state) => ({
  type: actionTypes.UPDATE_DOCUMENT,
  id,
  state
});

export const deleteDocument = id => ({
  type: actionTypes.DELETE_DOCUMENT,
  id
});
