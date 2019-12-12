import React from "react";
import { connect } from "react-redux";
import URLBar from "./URLBar";
import { connect as connectWebsocket } from "@giantmachines/redux-websocket";

const mapDispatchToProps = dispatch => ({
  connect: url => dispatch(connectWebsocket(url))
});

const mapStateToProps = state => ({
  url: state.client.url,
  isConnected: state.client.isConnected,
  isLoading: state.client.isTryingToConnect
});

export default connect(mapStateToProps, mapDispatchToProps)(URLBar);
