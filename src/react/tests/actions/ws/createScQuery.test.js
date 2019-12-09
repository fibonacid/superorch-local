import { actionTypes } from "../../../actions/actionTypes";
import {
  wsCreateScQuery,
  wsCreateScQueryError,
  wsCreateScQuerySuccess,
  wsCreateScQueryTimeout
} from "../../../actions/client/CreateScQuery";

describe("wsCreateScQuery action", () => {
  it("should create an action to request the creation of a new scQuery on the server", () => {
    const scQuery = {};
    expect(wsCreateScQuery(scQuery)).toEqual({
      type: actionTypes.WS_CREATE_SC_QUERY,
      scQuery
    });
  });
});

describe("wsCreateScQuerySuccess action", () => {
  it("should create an action to communicate that the request failed", () => {
    const scQueryId = 0;
    const diff = {};
    expect(wsCreateScQuerySuccess(scQueryId, diff)).toEqual({
      type: actionTypes.WS_CREATE_SC_QUERY_SUCCESS,
      scQueryId,
      diff
    });
  });
});

describe("wsCreateScQueryError action", () => {
  it("should create an action to communicate that the request succeeded", () => {
    const error = new Error();
    expect(wsCreateScQueryError(error)).toEqual({
      type: actionTypes.WS_CREATE_SC_QUERY_ERROR,
      error
    });
  });
});

describe("wsCreateScQueryTimeout action", () => {
  it("should create an action to communicate that the request took to long to complete", () => {
    const message = "";
    expect(wsCreateScQueryTimeout(message)).toEqual({
      type: actionTypes.WS_CREATE_SC_QUERY_TIMEOUT,
      message
    });
  });
});
