import reducer from "../../reducers/flash";
import { actionTypes } from "../../actions/actionTypes";
import { statusCodes } from "../../utils/constants";

describe("flash reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it("should handle ADD_FLASH_MESSAGE", () => {
    const status = 200;
    const message = statusCodes[200];
    expect(
      reducer(undefined, {
        type: actionTypes.ADD_FLASH_MESSAGE,
        status,
        message
      })
    ).toEqual([{ status, message, id: 1 }]);
  });

  it("should handle REMOVE_FLASH_MESSAGE", () => {
    const flashId = 1;
    expect(
      reducer([{ id: 1 }, { id: 2 }], {
        type: actionTypes.REMOVE_FLASH_MESSAGE,
        flashId
      })
    ).toEqual([{ id: 2 }]);
  });
});
