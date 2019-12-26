import { actionTypes } from "../actionTypes";

export const createDocument = (docId, docData) => ({
  type: actionTypes.CREATE_DOCUMENT,
  docId,
  docData
});

export const updateDocument = (docId, docData) => ({
  type: actionTypes.UPDATE_DOCUMENT,
  docId,
  docData
});

export const deleteDocument = docId => ({
  type: actionTypes.DELETE_DOCUMENT,
  docId
});

export const replaceDocumentList = docList => ({
  type: actionTypes.REPLACE_DOCUMENT_LIST,
  docList
});
