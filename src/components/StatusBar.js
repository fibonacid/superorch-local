import React, {Component} from 'react'
import {connect} from 'react-redux';
import styled from 'styled-components'

const StyledContainer = styled.div`
  padding: 5px;
  text-align: right;
  font-size: 14px;
`;

const StyledList = styled.div`
  /* */  
`;

class StatusBar extends Component {
  render() {
    return (
      <StyledContainer>
        {this.props.connected ?
          <p style={{color: "green"}}>connected</p> :
          <p style={{color: "red"}}>not connected</p>
        }
      </StyledContainer>
    )
  }
}

const mapStateToProps = state => ({
  connected: state.base.connected
});

export default connect(mapStateToProps)(StatusBar);
