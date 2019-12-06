import { actionTypes } from "../actionTypes";

export const wsUpdateDocument = document => ({
  type: actionTypes.WS_UPDATE_DOCUMENT,
  document
});
