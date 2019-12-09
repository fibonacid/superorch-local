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
