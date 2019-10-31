import React, {Component} from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  border-right: solid 1px black;
  width: 200px;
  max-width: 300px;
`;

const StyledList = styled.ul`
  overflow-y: auto;
  height: 100%;
`;

const StyledItem = styled.li`
  padding: 5px;
  border-bottom: solid 1px black;
`;


class SideBar extends Component {
  render() {
    return (
      <StyledContainer>
        <StyledList>
          <StyledItem>User 1</StyledItem>
          <StyledItem>User 2</StyledItem>
          <StyledItem>User 3</StyledItem>
        </StyledList>
      </StyledContainer>
    )
  }
}

export default SideBar
