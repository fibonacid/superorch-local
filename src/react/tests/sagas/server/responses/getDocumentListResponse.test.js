import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";
import { actionTypes } from "../../../../actions/actionTypes";
import { testFunction } from "../../../../utils/testing";
import { s_getDocumentListResponseSaga } from "../../../../sagas/server/responses/getDocumentListResponse";

describe("s_getDocumentListResponse saga", () => {
  describe("when everything is alright", () => {
    let saga;
    const clientId = 0;
    const docList = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];
    beforeEach(() => {
      saga = expectSaga(s_getDocumentListResponseSaga, clientId).withState({
        client: {
          documents: docList
        }
      });
    });

    it("should transmit the document list", () => {
      return saga
        .put({
          type: actionTypes.S_TRANSMIT,
          clientId,
          message: {
            type: actionTypes.S_GET_DOCUMENT_LIST_SUCCESS,
            docList
          }
        })
        .run();
    });
  });

  describe("when an error is raised", () => {
    it("should transmit an error 500 message to the client", () => {
      const clientId = 0;
      const error = new Error("test");
      return expectSaga(s_getDocumentListResponseSaga, clientId)
        .provide([[matchers.call.fn(testFunction), throwError(error)]])
        .put.like({
          action: {
            type: actionTypes.S_TRANSMIT,
            clientId,
            message: {
              type: actionTypes.S_GET_DOCUMENT_LIST_ERROR,
              error: { status: 500 }
            }
          }
        })
        .run();
    });
  });
});
