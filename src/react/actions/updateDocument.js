import { actionTypes } from "./actionTypes";

export const updateDocument = document => ({
  type: actionTypes.UPDATE_DOCUMENT,
  document
});
