import { actionTypes } from "../actionTypes";

export const wsCreateDocument = document => ({
  type: actionTypes.WS_CREATE_DOCUMENT,
  document
});

export const wsCreateDocumentSuccess = documentId => ({
  type: actionTypes.WS_CREATE_DOCUMENT_SUCCESS,
  documentId
});
export const wsCreateDocumentError = error => ({
  type: actionTypes.WS_CREATE_DOCUMENT_ERROR,
  error
});

export const wsCreateDocumentTimeout = message => ({
  type: actionTypes.WS_CREATE_DOCUMENT_ERROR,
  message
});
