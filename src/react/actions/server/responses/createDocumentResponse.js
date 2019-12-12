import { actionTypes } from "../../actionTypes";

export const s_createDocumentSuccess = (docId, docData) => ({
  type: actionTypes.S_CREATE_DOCUMENT_SUCCESS,
  docId, docData
});

export const s_createDocumentError = error => ({
  type: actionTypes.S_CREATE_DOCUMENT_ERROR,
  error
});
