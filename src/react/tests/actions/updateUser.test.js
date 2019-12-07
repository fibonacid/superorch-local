import { actionTypes } from "../../actions/actionTypes";
import { updateUser } from "../../actions/updateUser";

describe("updateUser action", () => {
  it("should create an action to update the user", () => {
    const id = 0;
    const data = {};
    expect(updateUser(id, data)).toEqual({
      type: actionTypes.UPDATE_USER,
      id,
      data
    });
  });
});
