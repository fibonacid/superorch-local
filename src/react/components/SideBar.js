import React from 'react'
import * as styled from './styles/SideBar.styles'

function SideBar(props) {
    const {users} = props;
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

export default SideBar;
