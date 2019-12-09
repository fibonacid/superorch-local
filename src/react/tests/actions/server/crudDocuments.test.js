import { actionTypes } from "../../../actions/actionTypes";
import {
  s_createDocument,
  s_deleteDocument,
  s_updateDocument
} from "../../../actions/server/crudDocuments";

describe("s_createDocument action", () => {
  it("should create an action to create a document", () => {
    const documentId = 0;
    const documentData = {};
    const expectedAction = {
      type: actionTypes.S_CREATE_DOCUMENT,
      documentId,
      documentData
    };
    expect(s_createDocument(documentId, documentData)).toEqual(expectedAction);
  });
});

describe("s_deleteDocument action", () => {
  it("should create an action to delete a document", () => {
    const documentId = 0;
    const expectedAction = {
      type: actionTypes.S_DELETE_DOCUMENT,
      documentId
    };
    expect(s_deleteDocument(documentId)).toEqual(expectedAction);
  });
});

describe("s_updateDocument action", () => {
  it("should create an action to update a user", () => {
    const documentId = 0;
    const documentData = {};
    const expectedAction = {
      type: actionTypes.S_UPDATE_DOCUMENT,
      documentId,
      documentData
    };
    expect(s_updateDocument(documentId, documentData)).toEqual(expectedAction);
  });
});
