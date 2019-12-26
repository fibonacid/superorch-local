import reducer from "./index";
import { actionTypes } from "../../actions/actionTypes";

describe("base reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toBeDefined();
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

  it("should handle WS_OPEN", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.WS_OPEN
      })
    ).toMatchObject({
      isConnected: true,
      isTryingToConnect: false
    });
  });

  it("should handle WS_CLOSED", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.WS_CLOSED
      })
    ).toMatchObject({
      isConnected: false,
      isTryingToConnect: false
    });
  });

  it("should handle WS_CONNECT", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.WS_CONNECT,
        payload: { url: "ws://test:8989" }
      })
    ).toMatchObject({
      isConnected: false,
      isTryingToConnect: true
    });
  });

  it("should handle WS_BEGIN_RECONNECT", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.WS_BEGIN_RECONNECT
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
});
