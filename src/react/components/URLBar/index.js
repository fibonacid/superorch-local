import React from "react";
import { connect } from "react-redux";
import { URLBar } from "./URLBar";

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => ({
  url: state.websocket.url,
  isConnected: state.websocket.isConnected,
  isLoading: state.websocket.isTryingToConnect
});

export default connect(mapStateToProps, mapDispatchToProps)(URLBar);
