import { actionTypes } from "../../../actions/actionTypes";
import {
  c_appendDocument,
  c_createDocument,
  c_deleteDocument,
  c_replaceDocumentList,
  c_updateDocument
} from "../../../actions/client/crudDocuments";

describe("c_createDocument action", () => {
  it("should create an action to create a document", () => {
    const docId = 0;
    const docData = {};
    const expectedAction = {
      type: actionTypes.C_CREATE_DOCUMENT,
      docId,
      docData
    };
    expect(c_createDocument(docId, docData)).toEqual(expectedAction);
  });
});

describe("c_deleteDocument action", () => {
  it("should create an action to delete a document", () => {
    const docId = 0;
    const expectedAction = {
      type: actionTypes.C_DELETE_DOCUMENT,
      docId
    };
    expect(c_deleteDocument(docId)).toEqual(expectedAction);
  });
});

describe("c_updateDocument action", () => {
  it("should create an action to update a document", () => {
    const docId = 0;
    const docData = {};
    const expectedAction = {
      type: actionTypes.C_UPDATE_DOCUMENT,
      docId,
      docData
    };
    expect(c_updateDocument(docId, docData)).toEqual(expectedAction);
  });
});

describe("c_replaceDocumentList action", () => {
  it("should create an action to replace the list of documents", () => {
    const docList = [];
    const expectedAction = {
      type: actionTypes.C_REPLACE_DOCUMENT_LIST,
      docList
    };
    expect(c_replaceDocumentList(docList)).toEqual(expectedAction);
  });
});
