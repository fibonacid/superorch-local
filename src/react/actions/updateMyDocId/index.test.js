import { actionTypes } from "../actionTypes";
import { updateMyDocId } from "./index";

describe("addMyDocId action", () => {
  it("should create an action to add a new user id", () => {
    const docId = 99;
    expect(updateMyDocId(docId)).toEqual({
      type: actionTypes.UPDATE_MY_DOC_ID,
      docId
    });
  });
});
