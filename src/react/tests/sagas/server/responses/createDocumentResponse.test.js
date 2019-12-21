import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";
import { actionTypes } from "../../../../actions/actionTypes";
import {
  s_createDocumentResponseSaga,
  generateDocId
} from "../../../../sagas/server/responses/createDocumentResponse";
import { testFunction } from "../../../../utils/testing";

describe("s_createDocumentResponse saga", () => {
  describe("when everything is alright", () => {
    let saga;
    const clientId = 0;
    const docId = 1;
    const docData = { foo: "bar" };
    const userId = 1;
    const newDoc = {
      ...docData,
      id: docId,
      userId
    };

    beforeEach(() => {
      saga = expectSaga(s_createDocumentResponseSaga, clientId, docData)
        .withState({
          server: {
            clients: [{ id: 0, userId }]
          },
          client: {
            users: [{ id: 1 }]
          }
        })
        .provide([[matchers.call.fn(generateDocId), docId]]);
    });

    it("should broadcast the new document", () => {
      return saga
        .put({
          type: actionTypes.S_BROADCAST,
          clientId,
          message: {
            type: actionTypes.B_DOCUMENT_CREATED,
            docId,
            docData: newDoc
          }
        })
        .run();
    });

    it("should transmit a success message", () => {
      return saga
        .put({
          type: actionTypes.S_TRANSMIT,
          clientId,
          message: {
            type: actionTypes.S_CREATE_DOCUMENT_SUCCESS,
            docId,
            docData: newDoc
          }
        })
        .run();
    });
  });

  describe("when an error is raised", () => {
    it("should transmit an error 500 message to the client", () => {
      const clientId = 0;
      const docData = {};
      const error = new Error("test");
      return expectSaga(s_createDocumentResponseSaga, clientId, docData)
        .provide([[matchers.call.fn(testFunction), throwError(error)]])
        .put.like({
          action: {
            type: actionTypes.S_TRANSMIT,
            clientId,
            message: {
              type: actionTypes.S_CREATE_DOCUMENT_ERROR,
              error: { status: 500 }
            }
          }
        })
        .run();
    });
  });
});
