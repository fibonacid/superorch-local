import { actionTypes } from "./actionTypes";

export const addDocument = id => ({
  type: actionTypes.ADD_DOCUMENT,
  id
});
