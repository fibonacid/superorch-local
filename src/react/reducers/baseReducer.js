const defaultState = {
    connected: false,
};

export const baseReducer = (state=defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};
