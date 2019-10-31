import React, {Component} from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  border-right: solid 1px black;
  max-width: 300px;
`;

class SideBar extends Component {
  render() {
    return (
      <StyledContainer>
        SideBar
      </StyledContainer>
    )
  }
}

export default SideBar
