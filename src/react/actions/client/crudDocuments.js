import { actionTypes } from "../actionTypes";

/**
 *
 * @param docId
 * @param docData
 * @returns {{docId: *, type: *, docData: *}}
 */
export const c_createDocument = (docId, docData) => ({
  type: actionTypes.C_CREATE_DOCUMENT,
  docId,
  docData
});

/**
 * @param docId
 * @returns {{docId: object, type: *}}
 */
export const c_deleteDocument = docId => ({
  type: actionTypes.C_DELETE_DOCUMENT,
  docId
});

/**
 *
 * @param docId
 * @param docData
 * @returns {{docId: *, type: *, docData: *}}
 */
export const c_updateDocument = (docId, docData) => ({
  type: actionTypes.C_UPDATE_DOCUMENT,
  docId,
  docData
});
