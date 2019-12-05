import { actionTypes } from "./actionTypes";

export const updateDocument = (id, data) => ({
  type: actionTypes.UPDATE_DOCUMENT,
  id,
  data
});
