import { actionTypes } from "../../actions/actionTypes";
import _ from "lodash";

describe("actionTypes", () => {
  it("doesn't contain duplicates", () => {
    const typesArray = _.values(actionTypes);
    const typesSet = new Set(typesArray);
    expect(typesSet.size).toEqual(typesArray.length);
  });
});
