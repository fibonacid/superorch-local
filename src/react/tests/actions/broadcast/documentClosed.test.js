import { actionTypes } from "../../../actions/actionTypes";
import { b_documentClosed } from "../../../actions/broadcast/documentClosed";

describe("b_documentClosed action", () => {
  it("should create an action to close an existing document", () => {
    const docId = 0;
    const expectedAction = {
      type: actionTypes.B_DOCUMENT_CLOSED,
      docId
    };
    expect(b_documentClosed(docId)).toEqual(expectedAction);
  });
});
