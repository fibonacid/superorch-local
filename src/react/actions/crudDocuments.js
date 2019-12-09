import { actionTypes } from "./actionTypes";

/**
 *
 * @param document
 * @returns {{document: *, type: *}}
 */
export const createDocument = document => ({
  type: actionTypes.CREATE_DOCUMENT,
  document
});

/**
 * @param id
 * @returns {{id: *, type: *}}
 */
export const deleteDocument = id => ({
  type: actionTypes.DELETE_DOCUMENT,
  id
});

/**
 * @param id
 * @param data
 * @returns {{data: *, id: *, type: *}}
 */
export const updateDocument = (id, data) => ({
  type: actionTypes.UPDATE_DOCUMENT,
  id,
  data
});
