import React from "react";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";

const mapDispatchToProps = dispatch => ({
  handleSubmit: (url, password) => {
    console.log(url, password);
  }
});

export default connect(null, mapDispatchToProps)(LoginForm);
