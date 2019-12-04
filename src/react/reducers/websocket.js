import username from "../utils/name";
import { actionTypes } from "../actions/actionTypes";

const initialState = {
  url: "ws://localhost:8989",
  isConnected: false,
  isTryingToConnect: false,
  username,
  userId: null
};

const websocket = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.WEBSOCKET_OPEN:
      return {
        ...state,
        isConnected: true,
        isTryingToConnect: false
      };
    case actionTypes.WEBSOCKET_CLOSED:
      return {
        ...state,
        isConnected: false,
        isTryingToConnect: false
      };
    case actionTypes.WEBSOCKET_CONNECT:
      return {
        ...state,
        url: action.payload.url,
        isTryingToConnect: true
      };
    case actionTypes.WEBSOCKET_BEGIN_RECONNECT:
      return {
        ...state,
        isTryingToConnect: true
      };
    case actionTypes.USER_ACCEPTED:
      return {
        ...state,
        userId: action.userId
      };
    default:
      return state;
  }
};

export default websocket;

/* ----------------
 *    Selectors
 * ---------------- */

export const selectUsername = state => state.username;
