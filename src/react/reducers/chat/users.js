import { actionTypes } from "../../actions/actionTypes";

const initialState = [];

const users = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return [...state, { id: action.id, ...action.data }];
    default:
      return state;
  }
};

export default users;
