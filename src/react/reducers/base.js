import { actionTypes } from "../actions/actionTypes";

export const initialState = {
  displayedUser: 0
};

const base = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DIGEST_APP_CREDITS:
    case actionTypes.UPDATE_BASE_DATA:
      return {
        ...state,
        ...action.data
      };
    case actionTypes.DISPLAY_USER:
      return {
        ...state,
        displayedUser: action.userId
      };
    default:
      return state;
  }
};

export default base;
