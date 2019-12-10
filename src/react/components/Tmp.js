import React from "react";
import { connect } from "react-redux";
import { c_loginRequest } from "../actions/client/loginRequest";
import { c_logoutRequest } from "../actions/client/logoutRequest";

function Tmp(props) {
  return (
    <div>
      <button onClick={props.login} disabled={props.isLoggedIn}>
        login
      </button>
      <button onClick={props.logout} disabled={!props.isLoggedIn}>
        logout
      </button>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(c_loginRequest()),
  logout: () => dispatch(c_logoutRequest())
});

const mapStateToProps = state => ({
  isLoggedIn: state.wsclient.isLoggedIn
});

export default connect(mapStateToProps, mapDispatchToProps)(Tmp);
