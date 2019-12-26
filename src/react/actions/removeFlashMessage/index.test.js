import { actionTypes } from "../actionTypes";
import { removeFlashMessage } from "./index";

describe("removeFlashMessage action", () => {
  it("should create an action to remove a flash message", () => {
    const flashId = 0;
    expect(removeFlashMessage(flashId)).toEqual({
      type: actionTypes.REMOVE_FLASH_MESSAGE,
      flashId
    });
  });
});
