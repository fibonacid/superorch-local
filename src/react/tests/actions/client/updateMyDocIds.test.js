import { actionTypes } from "../../../actions/actionTypes";
import { c_addMyDocId } from "../../../actions/client/updateMyDocIds";

describe("c_addMyDocId action", () => {
  it("should create an action to add a new user id", () => {
    const docId = 99;
    expect(c_addMyDocId(docId)).toEqual({
      type: actionTypes.C_ADD_MY_DOC_ID,
      docId
    });
  });
});
