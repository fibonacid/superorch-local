import React from "react";
import { connect } from "react-redux";
import URLBar from "./URLBar";
import { connect as connectWebsocket } from "@giantmachines/redux-websocket";

const mapDispatchToProps = dispatch => ({
  connect: url => dispatch(connectWebsocket(url))
});

const mapStateToProps = state => ({
  url: state.websocket.url,
  isConnected: state.websocket.isConnected,
  isLoading: state.websocket.isTryingToConnect
});

export default connect(mapStateToProps, mapDispatchToProps)(URLBar);
