import reducer from "../../../reducers/chat/document";
import { actionTypes } from "../../../actions/actionTypes";

describe("document reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      id: 0,
      content: ""
    });
  });

  it("should handle UPDATE_DOCUMENT", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.UPDATE_DOCUMENT,
        document: {
          content: "ciao"
        }
      })
    ).toEqual({
      id: 0,
      content: "ciao"
    });
  });
});
