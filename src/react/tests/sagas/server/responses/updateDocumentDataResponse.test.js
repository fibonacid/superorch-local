import _ from "lodash";
import { expectSaga } from "redux-saga-test-plan";
import { throwError } from "redux-saga-test-plan/providers";
import * as matchers from "redux-saga-test-plan/matchers";
import { actionTypes } from "../../../../actions/actionTypes";
import { s_updateDocumentDataResponseSaga } from "../../../../sagas/server/responses/updateDocumentDataResponse";
import { testFunction } from "../../../../utils/testing";

describe("s_updateDocumentData saga", () => {
  describe("when everything is alright", () => {
    const clientId = 0;
    const userId = 1;
    const docId = 2;
    const docData = { foo: "bar", id: 99, userId: 100 };

    let saga;
    beforeEach(() => {
      saga = expectSaga(
        s_updateDocumentDataResponseSaga,
        clientId,
        docId,
        docData
      ).withState({
        server: {
          clients: [{ id: clientId, userId }]
        },
        client: {
          users: [{ id: userId }],
          documents: [{ id: docId, userId }]
        }
      });
    });

    it("should broadcast a document update", () => {
      return saga.put
        .like({
          action: {
            type: actionTypes.S_BROADCAST,
            clientId,
            message: {
              type: actionTypes.B_DOCUMENT_UPDATE
            }
          }
        })
        .run();
    });
    it("should transmit a success message", () => {
      return saga.put
        .like({
          action: {
            type: actionTypes.S_TRANSMIT,
            clientId,
            message: {
              type: actionTypes.S_UPDATE_DOCUMENT_DATA_SUCCESS
            }
          }
        })
        .run();
    });
    it("should filter out id and userId from the received data", () => {
      return saga
        .put({
          type: actionTypes.S_BROADCAST,
          clientId,
          message: {
            type: actionTypes.B_DOCUMENT_UPDATE,
            docId,
            docData: _.omit(docData, ["id", "userId"])
          }
        })
        .run();
    });
  });

  describe("when document doesn't exist", () => {
    const clientId = 0;
    const userId = 1;
    const docId = 99;
    const docData = { foo: "bar" };

    let saga;
    beforeEach(() => {
      saga = expectSaga(
        s_updateDocumentDataResponseSaga,
        clientId,
        docId,
        docData
      ).withState({
        server: {
          clients: [{ id: clientId, userId }]
        },
        client: {
          users: [{ id: userId }],
          documents: [{ id: 2, userId }]
        }
      });
    });

    it("should transmit an error 404 to the client", () => {
      return saga.put
        .like({
          action: {
            type: actionTypes.S_TRANSMIT,
            clientId,
            message: {
              type: actionTypes.S_UPDATE_DOCUMENT_DATA_ERROR,
              error: { status: 404 }
            }
          }
        })
        .run();
    });
  });

  describe("when document is NOT owned by the client", () => {
    const clientId = 0;
    const userId = 1;
    const docId = 2;
    const docData = { foo: "bar" };

    let saga;
    beforeEach(() => {
      saga = expectSaga(
        s_updateDocumentDataResponseSaga,
        clientId,
        docId,
        docData
      ).withState({
        server: {
          clients: [{ id: clientId, userId }]
        },
        client: {
          users: [{ id: userId }],
          documents: [{ id: 2, userId: 10 }]
        }
      });
    });

    it("should transmit an error 400 to the client", () => {
      return saga.put
        .like({
          action: {
            type: actionTypes.S_TRANSMIT,
            clientId,
            message: {
              type: actionTypes.S_UPDATE_DOCUMENT_DATA_ERROR,
              error: { status: 400 }
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
      return expectSaga(s_updateDocumentDataResponseSaga, clientId)
        .provide([[matchers.call.fn(testFunction), throwError(error)]])
        .put.like({
          action: {
            type: actionTypes.S_TRANSMIT,
            clientId,
            message: {
              type: actionTypes.S_UPDATE_DOCUMENT_DATA_ERROR,
              error: { status: 500 }
            }
          }
        })
        .run();
    });
  });
});
