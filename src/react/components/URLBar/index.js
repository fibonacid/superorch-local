import { connect } from "react-redux";
import URLBar from "./URLBar";
import { connect as connectWebsocket } from "@giantmachines/redux-websocket";

const mapDispatchToProps = dispatch => ({
  connect: url => dispatch(connectWebsocket(url))
});

const mapStateToProps = state => ({
  url: state.client.status.url,
  isConnected: state.client.status.isConnected,
  isLoading: state.client.status.isTryingToConnect
});

export default connect(mapStateToProps, mapDispatchToProps)(URLBar);
