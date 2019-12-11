import { actionTypes } from "../../../actions/actionTypes";
import {
  c_appendDocument,
  c_createDocument,
  c_deleteDocument,
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

describe("c_appendDocument action", () => {
  it("should create an action to append a document to the list", () => {
    const docData = {};
    const expectedAction = {
      type: actionTypes.C_APPEND_DOCUMENT,
      docData
    };
    expect(c_appendDocument(docData)).toEqual(expectedAction);
  });
});
