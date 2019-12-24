import { connect } from "react-redux";
import StatusBar from "./StatusBar";
import { openExternalLink } from "../../actions/openExternalLink";
import { s_authWithPassword } from "../../actions/server/authWith";
import { s_changePassword } from "../../actions/server/changePassword";

const mapDispatchToProps = dispatch => ({
  openExternalLink: url => dispatch(openExternalLink(url)),
  setPassword: function(password) {
    dispatch(s_changePassword(password));
    dispatch(s_authWithPassword());
  }
});

const mapStateToProps = state => ({
  appName: state.base.name,
  appVersion: state.base.version,
  server: state.server.status
});

export default connect(mapStateToProps, mapDispatchToProps)(StatusBar);
