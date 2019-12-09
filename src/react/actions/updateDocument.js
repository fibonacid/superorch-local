import { actionTypes } from "./actionTypes";

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
