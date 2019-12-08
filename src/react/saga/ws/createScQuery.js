import { actionTypes } from "../../actions/actionTypes";
import { put, race, take, delay } from "redux-saga/effects";
import { send } from "@giantmachines/redux-websocket";
import { wsCreateScQuery } from "../../actions/ws/createScQuery";
import { updateScQuery } from "../../actions/updateScQuery";

export function* wsCreateScQuerySaga(action) {
  yield put(send(wsCreateScQuery(action.data)));

  // Wait for an error or success message
  const { result, error, timeout } = yield race({
    result: take(actionTypes.WS_CREATE_SC_QUERY_SUCCESS),
    error: take(actionTypes.WS_CREATE_SC_QUERY_ERROR),
    timeout: delay(2000, `Request took too long to complete`)
  });

  // If request completed successfully:
  if (result) {
    yield put(updateScQuery(action.id, result["diff"]));
  }
  // If request raised an error on the server:
  else if (error) {
    console.error(error);
  }
  // If request took to long to complete
  else if (timeout) {
    console.log(timeout);
  }
}
