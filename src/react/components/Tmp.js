import React, { useState } from "react";
import { connect } from "react-redux";
import { c_loginRequest } from "../actions/client/requests/loginRequest";
import { c_logoutRequest } from "../actions/client/requests/logoutRequest";
import { c_updateUser } from "../actions/client/crudUsers";

function Tmp(props) {
  const [userName, setUserName] = useState("");

  return (
    <div>
      <button onClick={props.login} disabled={props.isLoggedIn}>
        login
      </button>
      <button onClick={props.logout} disabled={!props.isLoggedIn}>
        logout
      </button>
      <div>
        <input value={userName} onChange={e => setUserName(e.target.value)} />
        <label>username</label>
        <button onClick={() => props.updateUsername(props.myUserId, userName)}>
          submit
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(c_loginRequest()),
  logout: () => dispatch(c_logoutRequest()),
  updateUsername: (userId, name) => dispatch(c_updateUser(userId, { name }))
});

const mapStateToProps = state => ({
  isLoggedIn: state.wsclient.isLoggedIn,
  myUserId: state.wsclient.myUserId
});

export default connect(mapStateToProps, mapDispatchToProps)(Tmp);
