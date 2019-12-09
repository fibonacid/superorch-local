import { actionTypes } from "../actions/actionTypes";

export const initialState = {};

const base = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DIGEST_APP_CREDITS:
      return {
        ...state,
        ...action.data
      };
    default:
      return state;
  }
};

export default base;
