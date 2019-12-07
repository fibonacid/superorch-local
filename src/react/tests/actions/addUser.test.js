import { actionTypes } from "../../actions/actionTypes";
import { addUser } from "../../actions/addUser";

describe("addUser action", () => {
  it("should create an action to add a new user", () => {
    const id = 0;
    const data = {};
    expect(addUser(id, data)).toEqual({
      type: actionTypes.ADD_USER,
      id,
      data
    });
  });
});
