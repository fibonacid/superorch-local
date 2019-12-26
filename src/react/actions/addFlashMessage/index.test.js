import { actionTypes } from "../actionTypes";
import { addFlashMessage } from "./index";
import { statusCodes } from "../../utils/constants";

describe("addFlashMessage action", () => {
  it("should create an action to add a flash message", () => {
    const status = 200;
    const message = statusCodes[200];
    expect(addFlashMessage(status, message)).toEqual({
      type: actionTypes.ADD_FLASH_MESSAGE,
      status,
      message
    });
  });
});
