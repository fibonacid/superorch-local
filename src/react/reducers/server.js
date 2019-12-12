const initialState = {
  port: 8989,
  isOnline: false
};

export default function server(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
