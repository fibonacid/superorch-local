import React, { useState } from "react";
import { connect } from "react-redux";
import { c_loginRequest } from "../actions/client/requests/loginRequest";
import { c_logoutRequest } from "../actions/client/requests/logoutRequest";
import { c_updateUser } from "../actions/client/crudUsers";
import {
  c_appendDocument,
  c_createDocument
} from "../actions/client/crudDocuments";

function Tmp(props) {
  const [userName, setUserName] = useState("");
  const [docValue, setDocValue] = useState("");

  return (
    <div>
      <button onClick={props.login} disabled={props.isLoggedIn}>
        login
      </button>
      <button onClick={props.logout} disabled={!props.isLoggedIn}>
        logout
      </button>
      <div>
        <label>username</label>
        <input value={userName} onChange={e => setUserName(e.target.value)} />
        <button onClick={() => props.updateUsername(props.myUserId, userName)}>
          submit
        </button>
      </div>
      <div>
        <label>document</label>
        <input value={docValue} onChange={e => setDocValue(e.target.value)} />
        <button onClick={() => props.appendDocument(docValue)}>
          create document
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(c_loginRequest()),
  logout: () => dispatch(c_logoutRequest()),
  updateUsername: (userId, name) => dispatch(c_updateUser(userId, { name })),
  appendDocument: value => dispatch(c_appendDocument(value))
});

const mapStateToProps = state => ({
  isLoggedIn: state.wsclient.isLoggedIn,
  myUserId: state.wsclient.myUserId,
  myDocIds: state.wsclient.myDocIds
});

export default connect(mapStateToProps, mapDispatchToProps)(Tmp);
