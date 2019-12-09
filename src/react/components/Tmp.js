import React from "react";
import { connect } from "react-redux";
import { c_loginRequest } from "../actions/client/loginRequest";
import { c_logoutRequest } from "../actions/client/logoutRequest";

function Tmp(props) {
  return (
    <div>
      <button onClick={props.login}>login</button>
      <button onClick={props.logout}>logout</button>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(c_loginRequest({ name: "foo" })),
  logout: () => dispatch(c_logoutRequest(0))
});

export default connect(null, mapDispatchToProps)(Tmp);
