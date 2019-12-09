import { actionTypes } from "../actionTypes";

/**
 *
 * @param documentId
 * @param documentData
 * @returns {{documentId: *, type: *, documentData: *}}
 */
export const c_createDocument = (documentId, documentData) => ({
  type: actionTypes.C_CREATE_DOCUMENT,
  documentId,
  documentData
});

/**
 * @param documentId
 * @returns {{documentId: object, type: *}}
 */
export const c_deleteDocument = documentId => ({
  type: actionTypes.C_DELETE_DOCUMENT,
  documentId
});

/**
 *
 * @param documentId
 * @param documentData
 * @returns {{documentId: *, type: *, documentData: *}}
 */
export const c_updateDocument = (documentId, documentData) => ({
  type: actionTypes.C_UPDATE_DOCUMENT,
  documentId,
  documentData
});
