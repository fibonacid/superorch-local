import { actionTypes } from "../actionTypes";

export const b_documentCreated = (docId, docData) => ({
  type: actionTypes.B_DOCUMENT_CREATED,
  docId,
  docData
});
