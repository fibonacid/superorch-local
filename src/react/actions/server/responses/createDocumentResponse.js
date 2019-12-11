import { actionTypes } from "../../actionTypes";

export const s_createDocumentSuccess = docId => ({
  type: actionTypes.S_CREATE_DOCUMENT_SUCCESS,
  docId
});

export const s_createDocumentError = error => ({
  type: actionTypes.S_CREATE_DOCUMENT_ERROR,
  error
});
