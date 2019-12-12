import { actionTypes } from "./actionTypes";

export const addFlashMessage = (status, message) => ({
  type: actionTypes.ADD_FLASH_MESSAGE,
  status,
  message
});
