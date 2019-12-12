import { actionTypes } from "../../../actions/actionTypes";
import { b_documentCreated } from "../../../actions/broadcast/documentCreated";

describe("b_documentCreated action", () => {
  it("should create an action to create a new document", () => {
    const docId = 0;
    const docData = {};
    const expectedAction = {
      type: actionTypes.B_DOCUMENT_CREATED,
      docId,
      docData
    };
    expect(b_documentCreated(docId, docData)).toEqual(expectedAction);
  });
});
