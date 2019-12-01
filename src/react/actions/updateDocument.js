import {actionTypes} from "./actionTypes";

export const updateDocument = (data) => ({
  type: actionTypes.UPDATE_DOCUMENT,
  data
});
