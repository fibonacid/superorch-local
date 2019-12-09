import { actionTypes } from "../../../actions/actionTypes";
import {
  c_createDocument,
  c_deleteDocument,
  c_updateDocument
} from "../../../actions/client/crudDocuments";

describe("c_createDocument action", () => {
  it("should create an action to create a document", () => {
    const documentId = 0;
    const documentData = {};
    const expectedAction = {
      type: actionTypes.C_CREATE_DOCUMENT,
      documentId,
      documentData
    };
    expect(c_createDocument(documentId, documentData)).toEqual(expectedAction);
  });
});

describe("c_deleteDocument action", () => {
  it("should create an action to delete a document", () => {
    const documentId = 0;
    const expectedAction = {
      type: actionTypes.C_DELETE_DOCUMENT,
      documentId
    };
    expect(c_deleteDocument(documentId)).toEqual(expectedAction);
  });
});

describe("c_updateDocument action", () => {
  it("should create an action to update a user", () => {
    const documentId = 0;
    const documentData = {};
    const expectedAction = {
      type: actionTypes.C_UPDATE_DOCUMENT,
      documentId,
      documentData
    };
    expect(c_updateDocument(documentId, documentData)).toEqual(expectedAction);
  });
});
