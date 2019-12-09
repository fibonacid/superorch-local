import { actionTypes } from "./actionTypes";

export const destroyClient = id => ({
  type: actionTypes.DESTROY_CLIENT,
  id
});
