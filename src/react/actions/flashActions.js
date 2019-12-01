import {actionTypes} from "./actionTypes";

export const flashInfo = (message) => ({
  type: actionTypes.FLASH_INFO,
  message
});

export const flashWarning = (message) => ({
  type: actionTypes.FLASH_WARNING,
  message
});

export const flashError = (message) => ({
  type: actionTypes.FLASH_ERROR,
  message
});
