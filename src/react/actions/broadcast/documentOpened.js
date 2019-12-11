import { actionTypes } from "../actionTypes";

export const b_documentOpened = (docId, docData) => ({
  type: actionTypes.B_DOCUMENT_OPENED,
  docId,
  docData
});
