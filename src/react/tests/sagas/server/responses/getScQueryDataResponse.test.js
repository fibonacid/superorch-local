import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { actionTypes } from "../../../../actions/actionTypes";
import { testFunction } from "../../../../utils/testing";
import { s_getScQueryDataResponseSaga } from "../../../../sagas/server/responses/getScQueryDataResponse";

describe("s_getScQueryDataResponse saga", () => {
  describe("when an error is raised", () => {
    it("should transmit an error 500 message to the client", () => {
      const clientId = 0;
      return expectSaga(s_getScQueryDataResponseSaga, clientId)
        .provide([
          [
            matchers.call.fn(testFunction),
            () => {
              throw new Error("test");
            }
          ]
        ])
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
