import { actionTypes } from "./actionTypes";

export const deleteDocument = id => ({
  type: actionTypes.DELETE_DOCUMENT,
  id
});
