import { connect } from "react-redux";
import StatusBar from "./StatusBar";
import { openExternalLink } from "../../actions/openExternalLink";

const mapDispatchToProps = dispatch => ({
  openExternalLink: url => dispatch(openExternalLink(url)),
  setPassword: function(password) {},
  disablePassword: () => {}
});

const mapStateToProps = state => ({
  runsOnElectron: state.base.runsOnElectron,
  appName: state.base.name,
  appVersion: state.base.version,
  server: { isRunning: false }
});

export default connect(mapStateToProps, mapDispatchToProps)(StatusBar);
