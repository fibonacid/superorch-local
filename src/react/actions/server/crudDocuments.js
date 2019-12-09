import { actionTypes } from "../actionTypes";

export const s_createDocument = (documentId, documentData) => ({
  type: actionTypes.S_CREATE_DOCUMENT,
  documentId,
  documentData
});

export const s_deleteDocument = documentId => ({
  type: actionTypes.S_DELETE_DOCUMENT,
  id
});

export const s_updateDocument = (documentId, documentData) => ({
  type: actionTypes.S_UPDATE_DOCUMENT,
  documentId,
  documentData
});
