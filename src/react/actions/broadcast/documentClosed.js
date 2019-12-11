import { actionTypes } from "../actionTypes";

export const b_documentClosed = docId => ({
  type: actionTypes.B_DOCUMENT_CLOSED,
  docId
});
