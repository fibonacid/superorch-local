import { actionTypes } from "./actionTypes";

export const addDocument = id => ({
  type: actionTypes.ADD_DOCUMENT,
  id
});

export const updateDocument = (id, data) => ({
  type: actionTypes.UPDATE_DOCUMENT,
  id,
  data
});

export const deleteDocument = id => ({
  type: actionTypes.DELETE_DOCUMENT,
  id
});
