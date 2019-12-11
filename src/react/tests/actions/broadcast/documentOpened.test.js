import { actionTypes } from "../../../actions/actionTypes";
import { b_documentOpened } from "../../../actions/broadcast/documentOpened";

describe("b_documentOpened action", () => {
  it("should create an action to open a new document", () => {
    const docId = 0;
    const docData = {};
    const expectedAction = {
      type: actionTypes.B_DOCUMENT_OPENED,
      docId,
      docData
    };
    expect(b_documentOpened(docId, docData)).toEqual(expectedAction);
  });
});
