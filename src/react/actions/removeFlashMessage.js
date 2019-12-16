import { actionTypes } from "./actionTypes";

export const removeFlashMessage = flashId => ({
  type: actionTypes.REMOVE_FLASH_MESSAGE,
  flashId
});
