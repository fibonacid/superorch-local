import { actionTypes } from "../../../actions/actionTypes";
import { b_documentUpdate } from "../../../actions/broadcast/documentUpdate";

describe("b_documentUpdate action", () => {
  it("should create an action to modify an existing document", () => {
    const docId = 0;
    const docData = {};
    const expectedAction = {
      type: actionTypes.B_DOCUMENT_UPDATE,
      docId,
      docData
    };
    expect(b_documentUpdate(docId, docData)).toEqual(expectedAction);
  });
});
