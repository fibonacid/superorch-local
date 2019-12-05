import name from "../utils/name";
import { actionTypes } from "../actions/actionTypes";

export const initialState = {
  defaultUser: {
    id: 0,
    name
  }
};

const base = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SWAP_USER_ID:
      return {
        ...state,
        defaultUser: {
          ...state.defaultUser,
          id: action.newId
        }
      };
    default:
      return state;
  }
};

export default base;

export const selectDefaultUser = state => state.defaultUser;
