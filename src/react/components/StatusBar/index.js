import {connect} from "react-redux";
import StatusBar from "./StatusBar";

const mapStateToProps = state => ({
  appName: state.app.name,
  appVersion: state.app.version,
  isConnected: state.websocket.connected
});

export default connect(mapStateToProps, null)(StatusBar);
