import { expectSaga } from "redux-saga-test-plan";
import { actionTypes } from "../actions/actionTypes";
import { channels } from "../../shared/constants";
import { openExternalLinkWatcher } from "../sagas/openExternalLink";
import { ipcRenderer } from "mocks/electron";

describe("openExternalLink saga", () => {
  it("should send a message to the main process", () => {
    const url = "https://www.google.com";
    return expectSaga(openExternalLinkWatcher)
      .call(ipcRenderer.send, channels.OPEN_EXT_LINK, url)
      .dispatch({
        type: actionTypes.OPEN_EXTERNAL_LINK,
        url
      })
      .run();
  });
});
