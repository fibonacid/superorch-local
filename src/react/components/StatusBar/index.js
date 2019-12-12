import { connect } from "react-redux";
import StatusBar from "./StatusBar";

const mapStateToProps = state => ({
  appName: state.base.name,
  appVersion: state.base.version,
  isConnected: state.client.status.isConnected
});

export default connect(mapStateToProps, null)(StatusBar);
