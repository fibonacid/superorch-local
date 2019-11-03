import {actionTypes} from "../actions/actionTypes";

export const usersReducer = (state=[], action) => {
  switch(action.type) {
    case actionTypes.USER_LIST:
      return action.users;
    default:
      return state;
  }
};
