import { actionTypes } from "../actionTypes";

export const b_documentUpdate = (docId, docData) => ({
  type: actionTypes.B_DOCUMENT_UPDATE,
  docId,
  docData
});
