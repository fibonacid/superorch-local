import {actionTypes} from '../actions/actionTypes'
import {messageReceived} from "../actions/actions";

require('ws');

export const setupSocket = (dispatch, username) => {
  // Create Socket Client
  const socket = new WebSocket(process.env['REACT_APP_SOCKET_URL']);

  // ----------------------
  // DEFINE EVENT LISTENERS
  // ----------------------

  // When a connection is opened:
  socket.onopen = () => {
    // Send a ADD_USER to server
    socket.send(JSON.stringify({
      type: actionTypes.ADD_USER,
      name: username
    }))
  };
  // When there is a new message:
  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    // Do different stuff depending on message type:
    switch(data.type) {
      // If data represents a user list:
      case actionTypes.USERS_LIST:
        dispatch(messageReceived(data.users));
    }
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
