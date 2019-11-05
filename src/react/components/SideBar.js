import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as styled from './styles/SideBar.styles'

class SideBar extends Component {
  render() {
    const {users} = this.props;
    return (
      <styled.Container>
        <styled.List>
          {users.map((user,i) => (
            <styled.ListItem key={i}>{user.name}</styled.ListItem>
          ))}
        </styled.List>
      </styled.Container>
    )
  }
}

const mapStateToProps = state => ({
  users: state.chat.users
});

export default connect(mapStateToProps, null)(SideBar);
