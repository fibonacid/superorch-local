import { actionTypes } from "../../actions/actionTypes";
import {
  createDocument,
  deleteDocument,
  updateDocument
} from "../../actions/crudDocuments";

describe("createDocument action", () => {
  it("should create an action to create a document", () => {
    const document = {};
    const expectedAction = {
      type: actionTypes.CREATE_DOCUMENT,
      document
    };
    expect(createDocument(document)).toEqual(expectedAction);
  });
});

describe("deleteDocument action", () => {
  it("should create an action to delete a document", () => {
    const id = 0;
    const expectedAction = {
      type: actionTypes.DELETE_DOCUMENT,
      id
    };
    expect(deleteDocument(id)).toEqual(expectedAction);
  });
});

describe("updateDocument action", () => {
  it("should create an action to update a user", () => {
    const id = 0;
    const data = {};
    const expectedAction = {
      type: actionTypes.UPDATE_DOCUMENT,
      id,
      data
    };
    expect(updateDocument(id, data)).toEqual(expectedAction);
  });
});
