import {actionTypes} from "../actions/actionTypes";

export const initialState = {
  shared: "/* Initial Text */",
  modified: false,
};

export const documentReducer = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.MESSAGE_RECEIVED:
        return {
          ...state,
          shared: action.data.message
        };
    default:
      return state;
  }
};
