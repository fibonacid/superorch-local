import { actionTypes } from "../../actions/actionTypes";

const initialState = {
  isRunning: false,
  password: "2019",
  authRequired: true
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
    default:
      return state;
  }
}
