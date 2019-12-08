import { actionTypes } from "../../actions/actionTypes";

const users = (state = [], action) => {
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

    case actionTypes.WS_GET_USER_LIST_SUCCESS:
      return action.userList;

    default:
      return state;
  }
};

export default users;

export const selectUser = (users, id) => users.find(user => user.id === id);
