import reducer from "./index";
import { actionTypes } from "../../actions/actionTypes";

describe("base reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      displayedUser: 0
    });
  });

  it("should handle DIGEST_APP_CREDITS", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.DIGEST_APP_CREDITS,
        data: {
          name: "test",
          version: "0.0.0"
        }
      })
    ).toMatchObject({
      name: "test",
      version: "0.0.0"
    });
  });

  it("should handle DISPLAY_USER", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.DISPLAY_USER,
        userId: 32
      })
    ).toMatchObject({
      displayedUser: 32
    });
  });

  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      isLoggedIn: false,
      isConnected: false,
      isTryingToConnect: false,
      myUserId: 0,
      myDocId: 0,
      myScQueryIds: []
    });
  });

  it("should handle C_OPEN", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.C_OPEN
      })
    ).toMatchObject({
      isConnected: true,
      isTryingToConnect: false
    });
  });

  it("should handle C_CLOSED", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.C_CLOSED
      })
    ).toMatchObject({
      isConnected: false,
      isTryingToConnect: false
    });
  });

  it("should handle C_CONNECT", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.C_CONNECT,
        payload: { url: "ws://test:8989" }
      })
    ).toMatchObject({
      isConnected: false,
      isTryingToConnect: true
    });
  });

  it("should handle C_BEGIN_RECONNECT", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.C_BEGIN_RECONNECT
      })
    ).toMatchObject({
      isConnected: false,
      isTryingToConnect: true
    });
  });

  it("should handle UPDATE_MY_USER_ID", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.UPDATE_MY_USER_ID,
        userId: 99
      })
    ).toMatchObject({
      myUserId: 99
    });
  });

  it("should handle UPDATE_MY_DOC_ID", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.UPDATE_MY_DOC_ID,
        docId: 99
      })
    ).toMatchObject({
      myDocId: 99
    });
  });

  it("should handle ADD_MY_SC_QUERY_ID", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.ADD_MY_SC_QUERY_ID,
        scqId: 1
      })
    ).toMatchObject({
      myScQueryIds: [1]
    });
  });

  it("should handle UPDATE_MY_SC_QUERY_ID", () => {
    expect(
      reducer(
        {
          myScQueryIds: [1, 2]
        },
        {
          type: actionTypes.UPDATE_MY_SC_QUERY_ID,
          scqId: 1,
          newId: 3
        }
      )
    ).toMatchObject({
      myScQueryIds: [3, 2]
    });
  });

  it("should handle REMOVE_MY_SC_QUERY_ID", () => {
    expect(
      reducer(
        {
          myScQueryIds: [1, 2]
        },
        {
          type: actionTypes.REMOVE_MY_SC_QUERY_ID,
          scqId: 1
        }
      )
    ).toMatchObject({
      myScQueryIds: [2]
    });
  });

  it("should handle S_SERVER_STARTED", () => {
    const address = "127.0.0";
    const port = 8000;
    expect(
      reducer(undefined, {
        type: actionTypes.S_SERVER_STARTED,
        data: { address, port }
      })
    ).toMatchObject({
      url: `ws://${address}:${port}`
    });
  });
});
