import { connect } from "react-redux";
import StatusBar from "./StatusBar";

const mapStateToProps = state => ({
  appName: state.base.name,
  appVersion: state.base.version,
  server: state.server.status
});

export default connect(mapStateToProps, null)(StatusBar);
