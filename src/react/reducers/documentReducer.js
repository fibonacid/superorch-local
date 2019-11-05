import {actionTypes} from "../actions/actionTypes";

export const initialState = {
  current: "",
  modified: false,
};

export const documentReducer = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.MESSAGE_RECEIVED:
        return {
          ...state,
          current: state.current + action.data.message
        };
    default:
      return state;
  }
};
