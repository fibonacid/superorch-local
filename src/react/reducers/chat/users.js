import { actionTypes } from "../../actions/actionTypes";
import _ from "lodash";

const initialState = [];

const users = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return [
        ...state,
        {
          id: action.id,
          ...action.data
        }
      ];

    case actionTypes.UPDATE_USER:
      // Modify data of user with same id.
      return state.map(user =>
        user.id === action.id
          ? {
              ...user,
              ...action.data
            }
          : user
      );

    case actionTypes.DELETE_USER:
      return state.filter(user => user.id !== action.id);

    case actionTypes.REPLACE_USER_LIST:
      console.log(action.users);
      return action.users;

    default:
      return state;
  }
};

export default users;

export const selectUser = (users, id) => users.find(user => user.id === id);

export const selectUserByLocalId = (users, localId) =>
  users.find(user => user.localId === localId);
