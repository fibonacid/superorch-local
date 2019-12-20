import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { actionTypes } from "../../../../actions/actionTypes";
import { testFunction } from "../../../../utils/testing";
import { s_getUserListResponseSaga } from "../../../../sagas/server/responses/getUserListResponse";

describe("s_getUserListResponse saga", () => {
  describe("when everything is alright", () => {
    let saga;
    const clientId = 0;
    const userList = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];
    beforeEach(() => {
      saga = expectSaga(s_getUserListResponseSaga, clientId).withState({
        client: {
          users: userList
        }
      });
    });

    it("should transmit the user list", () => {
      return saga
        .put({
          type: actionTypes.S_TRANSMIT,
          clientId,
          message: {
            type: actionTypes.S_GET_USER_LIST_SUCCESS,
            userList
          }
        })
        .run();
    });
  });

  describe("when an error is raised", () => {
    it("should transmit an error 500 message to the client", () => {
      const clientId = 0;
      return expectSaga(s_getUserListResponseSaga, clientId)
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
              type: actionTypes.S_GET_USER_LIST_ERROR,
              error: { status: 500 }
            }
          }
        })
        .run();
    });
  });
});
