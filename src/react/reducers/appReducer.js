import {actionTypes} from "../actions/actionTypes";

export const appReducer = (state={}, action) => {
  switch(action.type) {
    case actionTypes.APP_INFO:
      return {
        ...state,
        ...action.data
      };
    default:
      return state;
  }
};
