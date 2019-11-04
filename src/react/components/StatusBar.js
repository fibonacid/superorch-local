import React, {Component} from 'react'
import {connect} from 'react-redux';
import styled from 'styled-components'

const StyledContainer = styled.div`
  padding: 5px;
  text-align: right;
  font-size: 14px;
  flex: 0 0 auto;
`;

const StyledList = styled.div`
  /* */  
`;

class StatusBar extends Component {
  render() {
    const { appName, appVersion } = this.props;
    return (
      <StyledContainer>
        {/*this.props.connected ?
          <p style={{color: "green"}}>connected</p> :
          <p style={{color: "red"}}>not connected</p>
        */}
        <span>{appName} {appVersion}</span>
      </StyledContainer>
    )
  }
}

const mapStateToProps = state => ({
  connected: state.base.connected
});

export default connect(mapStateToProps)(StatusBar);
