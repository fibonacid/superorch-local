import React from 'react';
import {connect} from 'react-redux';
import {connect as connectSocket} from '@giantmachines/redux-websocket';
import InputURL from "../InputURL/InputURL";

function SocketSettings(props) {
  return (
    <div>
      <InputURL onClick={props.connect}/>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  connect: (value) => dispatch(connectSocket(value))
});

const mapStateToProps = (state) => ({
  success: state.websocket.connected,
  initialValue: state.websocket.url
});

export default connect(mapStateToProps, mapDispatchToProps)(SocketSettings)
