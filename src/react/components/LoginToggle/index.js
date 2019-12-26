import { connect } from "react-redux";
import LoginToggle from "./LoginToggle";
import { c_loginRequest } from "../../actions/requests/loginRequest";
import { c_logoutRequest } from "../../actions/requests/logoutRequest";

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(c_loginRequest()),
  logout: () => dispatch(c_logoutRequest())
});

const mapStateToProps = state => ({
  isLoggedIn: state.client.status.isLoggedIn
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginToggle);
