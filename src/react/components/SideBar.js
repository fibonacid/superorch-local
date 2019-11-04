import React, {Component} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

const StyledContainer = styled.div`
  border-right: solid 1px black;
  width: 200px;
  max-width: 300px;
  overflow-y: auto;
`;

const StyledList = styled.ul`
  height: 100%;
`;

const StyledItem = styled.li`
  padding: 5px;
  border-bottom: solid 1px black;
`;


class SideBar extends Component {
  render() {
    const {users} = this.props;
    return (
      <StyledContainer>
        <StyledList>
          {users.map((user,i) => (
            <StyledItem key={i}>{user.name}</StyledItem>
          ))}
        </StyledList>
      </StyledContainer>
    )
  }
}

const mapStateToProps = state => ({
  users: state.chat.users
});

export default connect(mapStateToProps, null)(SideBar);
