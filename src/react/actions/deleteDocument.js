import { actionTypes } from "./actionTypes";

/**
 * @param id
 * @returns {{id: *, type: *}}
 */
export const deleteDocument = id => ({
  type: actionTypes.DELETE_DOCUMENT,
  id
});
