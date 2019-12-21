import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { actionTypes } from "../../../../actions/actionTypes";
import { c_execScQueryRequestWatcher } from "../../../../sagas/client/requests/execScQueryRequest";
import { ipcRenderer } from "../../../mocks/electron";
import { channels } from "../../../../../shared/constants";

const scqId = 0;
const input = "1 + 1";
const response = 2;
const scqData = {
  id: scqId,
  input
};
const getState = (isLoggedIn = false) => ({
  client: {
    scQueries: [scqData],
    status: {
      isLoggedIn
    }
  }
});

describe("c_execScQueryRequest saga", () => {
  it("should send a supercollider instruction to the main process", () => {
    return expectSaga(c_execScQueryRequestWatcher)
      .withState(getState())
      .call(ipcRenderer.invoke, channels.SUPERCOLLIDER_MESSAGE, {
        message: input
      })
      .dispatch({
        type: actionTypes.C_EXEC_SC_QUERY_REQUEST,
        scqId
      })
      .run();
  });

  describe("when main process respond with a result of the query", () => {
    let saga;
    beforeEach(() => {
      saga = expectSaga(c_execScQueryRequestWatcher).provide([
        [matchers.call.fn(ipcRenderer.invoke), response]
      ]);
    });

    it("should update the supercollider query with a result", () => {
      return saga
        .withState(getState())
        .put({
          type: actionTypes.C_UPDATE_SC_QUERY,
          scqId,
          scqData: {
            output: JSON.stringify(response)
          }
        })
        .dispatch({
          type: actionTypes.C_EXEC_SC_QUERY_REQUEST,
          scqId
        })
        .run();
    });

    describe("when client is logged in", () => {
      it("should send a request to update the scQuery", () => {
        return saga
          .withState(getState(true))
          .put.like({
            action: {
              type: actionTypes.C_UPDATE_SC_QUERY_DATA_REQUEST
            }
          })
          .dispatch({
            type: actionTypes.C_EXEC_SC_QUERY_REQUEST,
            scqId
          })
          .run();
      });
    });

    describe("when client is logged out", () => {
      it("should NOT send a request to update the scQuery", () => {
        return saga
          .withState(getState(false))
          .not.put.like({
            action: {
              type: actionTypes.C_UPDATE_SC_QUERY_DATA_REQUEST
            }
          })
          .dispatch({
            type: actionTypes.C_EXEC_SC_QUERY_REQUEST,
            scqId
          })
          .run();
      });
    });
  });
});
