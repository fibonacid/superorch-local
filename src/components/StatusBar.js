import React, {Component} from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  padding: 5px;
  text-align: right;
  font-size: 14px;
`;

const StyledList = styled.div`
  
`;

class StatusBar extends Component {
  render() {
    return (
      <StyledContainer>
        Status
      </StyledContainer>
    )
  }
}

export default StatusBar;
