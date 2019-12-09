import { actionTypes } from "./actionTypes";

export const createClient = client => ({
  type: actionTypes.CREATE_CLIENT,
  client
});
