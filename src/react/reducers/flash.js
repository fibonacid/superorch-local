import { actionTypes } from "../actions/actionTypes";

let flashCount = 0;

export default function flash(state = [], action) {
  switch (action.type) {
    case actionTypes.ADD_FLASH_MESSAGE:
    case actionTypes.C_LOGIN_SUCCESS:
    case actionTypes.C_LOGOUT_SUCCESS:
      flashCount++;
      return [
        ...state,
        {
          id: flashCount,
          status: action.status,
          message: action.message
        }
      ];

    case actionTypes.REMOVE_FLASH_MESSAGE:
      return state.filter(flash => flash.id !== action.flashId);

    default:
      return state;
  }
}
