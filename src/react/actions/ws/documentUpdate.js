import { actionTypes } from "../actionTypes";

export const wsDocumentUpdate = document => ({
  type: actionTypes.WS_DOCUMENT_UPDATE,
  document
});
