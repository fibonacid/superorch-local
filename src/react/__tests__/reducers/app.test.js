import app from "../../reducers/app";
import { actionTypes } from "../../actions/actionTypes";

describe("app (Reducer)", () => {
  describe("when state is not populated", () => {
    it("Should return the initial state", () => {
      const result = app(undefined, { type: "foo" });
      expect(result).toEqual({});
    });

    it("Should handle APP_INFO", () => {
      const data = {
        name: "Test",
        version: "1.0"
      };
      const action = {
        type: actionTypes.INIT_APP_INFO,
        data
      };
      const expectedResult = data;
      const result = app(undefined, action);
      expect(result).toEqual(expectedResult);
    });
  });

  describe("when state is already populated", () => {
    it("Should handle APP_INFO", () => {
      const state = {
        name: "Test",
        version: "1.0"
      };
      const data = {
        foo: "bar"
      };
      const action = {
        type: actionTypes.INIT_APP_INFO,
        data
      };
      const expectedResult = {
        ...state,
        ...data
      };
      const result = app(state, action);
      expect(result).toEqual(expectedResult);
    });
  });
});
