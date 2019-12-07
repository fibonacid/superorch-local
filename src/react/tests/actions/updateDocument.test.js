import { actionTypes } from "../../actions/actionTypes";
import { updateDocument } from "../../actions/updateDocument";

describe("updateDocument action", () => {
  it("should create an action to update the document", () => {
    const document = {};
    expect(updateDocument(document)).toEqual({
      type: actionTypes.UPDATE_DOCUMENT,
      document
    });
  });
});
