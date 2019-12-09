import { put } from "redux-saga/effects";
import { s_createUser } from "../../actions/server/crudUsers";
import { s_updateClient } from "../../actions/server/crudClients";

let userCount = 0;

export function* s_createUserSaga(userData, clientId) {
  // Update user count
  userCount++;

  // Create new user with given data,
  // but locally generated id.
  const newUser = {
    ...userData,
    id: userCount
  };

  try {
    // Store new user
    yield put(s_createUser(newUser.id, newUser));
    // Assign user to it's parent client
    yield put(s_updateClient(clientId, { userId: newUser.id }));

    // If everything is alright transmit the userId to the newly connected client.
    //yield put(wsTransmitMessage(wsCreateUserSuccess(newUser.id), clientId));
    // Then, broadcast new user to all the other clients
    //yield put(wsBroadcastMessage(wsUserJoined(newUser), clientId));
  } catch (error) {
    // If there was an error:
    // Transmit error to the newly connected client.
    //yield put(wsTransmitMessage(wsCreateUserError(error), clientId));
  }
}
