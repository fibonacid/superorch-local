import {actionTypes} from "../actions/actionTypes";

export const flashTypes = {
  info: "info",
  warning: "warning",
  error: "error"
};

export const flashReducer = (state=[], action) => {
  switch(action.type) {
    case actionTypes.FLASH_INFO:
      return [
        ...state,
        createMessage(action, flashTypes.info)
      ];
    case actionTypes.FLASH_WARNING:
      return [
        ...state,
        createMessage(action, flashTypes.warning)
      ];
    case actionTypes.FLASH_ERROR:
      return [
        ...state,
        createMessage(action, flashTypes.error)
      ];
    default:
      return state;
  }
};

function createMessage({message}, flashType) {
  return { message, type: flashType }
}
