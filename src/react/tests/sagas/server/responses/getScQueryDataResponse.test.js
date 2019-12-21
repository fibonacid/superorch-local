import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";
import { actionTypes } from "../../../../actions/actionTypes";
import { testFunction } from "../../../../utils/testing";
import { s_getScQueryDataResponseSaga } from "../../../../sagas/server/responses/getScQueryDataResponse";

describe("s_getScQueryDataResponse saga", () => {
  describe("when everything is alright", () => {
    it("should transmit the supercollider query", () => {
      const clientId = 0;
      const scqId = 1;
      const scqData = { id: scqId };
      return expectSaga(s_getScQueryDataResponseSaga, clientId, scqId)
        .withState({
          client: {
            scQueries: [scqData, { id: 2 }, { id: 3 }]
          }
        })
        .put({
          type: actionTypes.S_TRANSMIT,
          clientId,
          message: {
            type: actionTypes.S_GET_SC_QUERY_DATA_SUCCESS,
            scqData
          }
        })
        .run();
    });
  });

  describe("when supercollider query is not found", () => {
    it("should transmit an error 404 message", () => {
      const clientId = 0;
      const scqId = 100;
      return expectSaga(s_getScQueryDataResponseSaga, clientId, scqId)
        .withState({
          client: {
            scQueries: [{ id: 1 }, { id: 2 }, { id: 3 }]
          }
        })
        .put.like({
          action: {
            type: actionTypes.S_TRANSMIT,
            clientId,
            message: {
              type: actionTypes.S_GET_SC_QUERY_DATA_ERROR,
              error: {
                status: 404
              }
            }
          }
        })
        .run();
    });
  });

  describe("when an error is raised", () => {
    it("should transmit an error 500 message to the client", () => {
      const clientId = 0;
      const error = new Error("test");
      return expectSaga(s_getScQueryDataResponseSaga, clientId)
        .provide([[matchers.call.fn(testFunction), throwError(error)]])
        .put.like({
          action: {
            type: actionTypes.S_TRANSMIT,
            clientId,
            message: {
              type: actionTypes.S_GET_SC_QUERY_DATA_ERROR,
              error: { status: 500 }
            }
          }
        })
        .run();
    });
  });
});
