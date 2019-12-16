import { actionTypes } from "../../../actions/actionTypes";
import { c_updateMyDocId } from "../../../actions/client/updateMyDocId";

describe("c_addMyDocId action", () => {
  it("should create an action to add a new user id", () => {
    const docId = 99;
    expect(c_updateMyDocId(docId)).toEqual({
      type: actionTypes.C_UPDATE_MY_DOC_ID,
      docId
    });
  });
});
