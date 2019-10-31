const defaultState = {
    connected: false,
    activeChat: undefined
};

export const baseReducer = (state={}, action) => {
    switch(action.type) {
        case "REDUX_WEBSOCKET::OPEN":
            return {
                ...state,
                connected: action.payload.isTrusted
            };
        case "REDUX_WEBSOCKET::CLOSED":
            return {
                ...state,
                connected: false
            };
        default:
            return state;
    }
};
