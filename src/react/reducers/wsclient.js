import { actionTypes } from "../actions/actionTypes";

const initialState = {
  url: "ws://localhost:8989",
  isLoggedIn: false,
  isConnected: false,
  isTryingToConnect: false,
  myUserId: 0
};

const wsclient = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.C_OPEN:
      return {
        ...state,
        isConnected: true,
        isTryingToConnect: false
      };
    case actionTypes.C_CLOSED:
      return {
        ...state,
        isConnected: false,
        isTryingToConnect: false
      };
    case actionTypes.C_CONNECT:
      return {
        ...state,
        url: action.payload.url,
        isTryingToConnect: true
      };
    case actionTypes.C_BEGIN_RECONNECT:
      return {
        ...state,
        isTryingToConnect: true
      };
    case actionTypes.C_UPDATE_MY_USER_ID:
      return {
        ...state,
        myUserId: action.newId
      };
    default:
      return state;
  }
};

export default wsclient;
