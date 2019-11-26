import {actionTypes} from "../../actions/actionTypes";

const users = (state=[], action) => {
  switch(action.type) {
    case actionTypes.USER_LIST:
      return action.users;
    default:
      return state;
  }
};

export default users;
