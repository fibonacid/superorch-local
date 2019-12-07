import { actionTypes } from "../actions/actionTypes";

const initialState = {
  url: "ws://localhost:8989",
  isConnected: false,
  isTryingToConnect: false
};

const websocket = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.WS_OPEN:
      return {
        ...state,
        isConnected: true,
        isTryingToConnect: false
      };
    case actionTypes.WS_CLOSED:
      return {
        ...state,
        isConnected: false,
        isTryingToConnect: false
      };
    case actionTypes.WS_CONNECT:
      return {
        ...state,
        url: action.payload.url,
        isTryingToConnect: true
      };
    case actionTypes.WS_BEGIN_RECONNECT:
      return {
        ...state,
        isTryingToConnect: true
      };
    default:
      return state;
  }
};

export default websocket;
