import { put, select } from "redux-saga/effects";
import { s_createUser, s_updateUser } from "../../actions/server/crudUsers";
import { s_updateClient } from "../../actions/server/crudClients";
import { selectUser } from "../../reducers/root";

let userCount = 0;

export function* s_loginResponseSaga(userData, clientId) {
  // Update user count
  userCount++;

  // Create new user with given data,
  // but locally generated id.
  const newUser = {
    ...userData,
    id: userCount
  };

  console.log(userData);

  try {
    // Find out if user already exists in the store:
    /*const user = yield select(state => selectUser(state, userData.id));
    // If user already exists:
    if (user) {
      // Assign him a new id.
      yield put(s_updateUser(user.id, newUser));
    }
    // If user doesn't exist yet:
    else {
      // Create it.
      yield put(s_createUser(newUser.id, newUser));
    }()*/
    //yield put(s_createUser(newUser.id, newUser));
    // Finally, assign user to its parent client.
    //yield put(s_updateClient(clientId, { userId: newUser.id }));
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
