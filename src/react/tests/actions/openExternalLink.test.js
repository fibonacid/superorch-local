import { actionTypes } from "../../actions/actionTypes";
import { openExternalLink } from "../../actions/openExternalLink";

describe("openExternalLink action", () => {
  it("should create an action to open an external link", () => {
    const url = "www.google.com";
    expect(openExternalLink(url)).toEqual({
      type: actionTypes.OPEN_EXTERNAL_LINK,
      url
    });
  });
});
