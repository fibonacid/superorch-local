import {actionTypes} from "../actions/actionTypes";

const defaultState = {
  current: "",
  modified: false,
};

export const documentReducer = (state=defaultState, action) => {
  switch(action.type) {
    case actionTypes.MESSAGE_RECEIVED:
        return {
          ...state,
          current: state.current + action.message
        };
    default:
      return state;
  }
};
