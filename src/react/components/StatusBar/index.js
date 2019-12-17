import { connect } from "react-redux";
import StatusBar from "./StatusBar";
import { openExternalLink } from "../../actions/openExternalLink";

const mapDispatchToProps = dispatch => ({
  openExternalLink: url => dispatch(openExternalLink(url))
});

const mapStateToProps = state => ({
  appName: state.base.name,
  appVersion: state.base.version,
  server: state.server.status
});

export default connect(mapStateToProps, mapDispatchToProps)(StatusBar);
