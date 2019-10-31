const defaultState = {
    connected: false,
    activeChat: 1
};

export const baseReducer = (state=defaultState, action) => {
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
