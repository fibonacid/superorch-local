import { actionTypes } from "../../actions/actionTypes";
import { updateBaseData } from "../../actions/updateBaseData";

describe("updateBaseData action", () => {
  it("should create an action to update base data", () => {
    const data = {};
    expect(updateBaseData(data)).toEqual({
      type: actionTypes.UPDATE_BASE_DATA,
      data
    });
  });
});
