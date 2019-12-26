import { actionTypes } from "../../actions/actionTypes";

let flashCount = 0;

export default function base(state = [], action) {
  switch (action.type) {
    case actionTypes.ADD_FLASH_MESSAGE:
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
