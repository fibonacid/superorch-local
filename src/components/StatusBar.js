import React, {Component} from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  padding: 5px;
  text-align: right;
`;

class StatusBar extends Component {
  render() {
    return (
      <StyledContainer>
        Status Bar
      </StyledContainer>
    )
  }
}

export default StatusBar;
