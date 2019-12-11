import { actionTypes } from "../../../actions/actionTypes";
import {
  c_addMyDocId,
  c_removeMyDocId
} from "../../../actions/client/updateMyDocIds";

describe("c_addMyDocId action", () => {
  it("should create an action to add a new user id", () => {
    const docId = 99;
    expect(c_addMyDocId(docId)).toEqual({
      type: actionTypes.C_ADD_MY_DOC_ID,
      docId
    });
  });
});

describe("c_removeMyDocId action", () => {
  it("should create an action to remove a new user id", () => {
    const docId = 99;
    expect(c_removeMyDocId(docId)).toEqual({
      type: actionTypes.C_REMOVE_MY_DOC_ID,
      docId
    });
  });
});
