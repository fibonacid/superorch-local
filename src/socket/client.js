import {actionTypes} from '../actions/actionTypes'

require('ws');

export const setupSocket = (dispatch, username) => {
  // Create Socket Client
  const socket = new WebSocket(process.env['REACT_APP_SOCKET_SERVER']);

  // ----------------------
  // DEFINE EVENT LISTENERS
  // ----------------------

  // When a connection is opened
  socket.onopen = () => {
    socket.send(JSON.stringify({
      type: actionTypes.ADD_USER,
      name: username
    }))
  };
  /*socket.onmessage = (event) => {
    const data = JSON.parse(event.data)
    switch (data.type) {
      case actionTypes.ADD_MESSAGE:
        dispatch(messageReceived(data.message, data.author))
        break
      case actionTypes.USERS_LIST:
        dispatch(populateUsersList(data.users))
        break
      default:
        break
    }
  };*/
  return socket
};
