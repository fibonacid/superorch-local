import React, {Component} from 'react'
import {connect} from 'react-redux';
import * as styled from './styles/StatusBar.styles';

class StatusBar extends Component {
  render() {
    const { appName, appVersion } = this.props;
    return (
      <styled.Container>
        {/*this.props.connected ?
          <p style={{color: "green"}}>connected</p> :
          <p style={{color: "red"}}>not connected</p>
        */}
        <span>{appName} {appVersion}</span>
      </styled.Container>
    )
  }
}

const mapStateToProps = state => ({
  connected: state.base.connected
});

export default connect(mapStateToProps)(StatusBar);
