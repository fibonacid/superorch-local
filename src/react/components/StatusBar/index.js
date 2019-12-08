import { connect } from "react-redux";
import StatusBar from "./StatusBar";

const mapStateToProps = state => ({
  appName: state.base.name,
  appVersion: state.base.version,
  isConnected: state.websocket.isConnected
});

export default connect(mapStateToProps, null)(StatusBar);
