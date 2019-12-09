import React from "react";
import { connect } from "react-redux";
import URLBar from "./URLBar";
import { connect as connectWebsocket } from "@giantmachines/redux-websocket";

const mapDispatchToProps = dispatch => ({
  connect: url => dispatch(connectWebsocket(url))
});

const mapStateToProps = state => ({
  url: state.wsclient.url,
  isConnected: state.wsclient.isConnected,
  isLoading: state.wsclient.isTryingToConnect
});

export default connect(mapStateToProps, mapDispatchToProps)(URLBar);
