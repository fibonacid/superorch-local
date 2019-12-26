import { actionTypes } from "../actionTypes";
import {
  createDocument,
  deleteDocument,
  replaceDocumentList,
  updateDocument
} from "./index";

describe("createDocument action", () => {
  it("should create an action to create a document", () => {
    const docId = 0;
    const docData = {};
    const expectedAction = {
      type: actionTypes.CREATE_DOCUMENT,
      docId,
      docData
    };
    expect(createDocument(docId, docData)).toEqual(expectedAction);
  });
});

describe("deleteDocument action", () => {
  it("should create an action to delete a document", () => {
    const docId = 0;
    const expectedAction = {
      type: actionTypes.DELETE_DOCUMENT,
      docId
    };
    expect(deleteDocument(docId)).toEqual(expectedAction);
  });
});

describe("updateDocument action", () => {
  it("should create an action to update a document", () => {
    const docId = 0;
    const docData = {};
    const expectedAction = {
      type: actionTypes.UPDATE_DOCUMENT,
      docId,
      docData
    };
    expect(updateDocument(docId, docData)).toEqual(expectedAction);
  });
});

describe("replaceDocumentList action", () => {
  it("should create an action to replace the list of documents", () => {
    const docList = [];
    const expectedAction = {
      type: actionTypes.REPLACE_DOCUMENT_LIST,
      docList
    };
    expect(replaceDocumentList(docList)).toEqual(expectedAction);
  });
});
