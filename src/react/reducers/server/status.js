import { actionTypes } from "../../actions/actionTypes";

const initialState = {
  isRunning: false,
  password: null,
  requirePassword: false
};

export default function status(state = initialState, action) {
  switch (action.type) {
    case actionTypes.S_SERVER_STARTED:
      const { address, port } = action.data;
      return {
        ...state,
        isRunning: true,
        url: `http://${address}:${port}`,
        wsEndpoint: `ws://${address}:${port}`
      };
    case actionTypes.S_AUTH_WITH_PASSWORD:
      return {
        ...state,
        requirePassword: action.flag
      };
    case actionTypes.S_CHANGE_PASSWORD:
      return {
        ...state,
        password: action.password
      };
    default:
      return state;
  }
}
