import React from 'react'
import * as styled from './styles/SideBar.styles'

function SideBar(props) {
    const {users} = props;
    return (
      <styled.Container
        data-test={'SideBarComponent'} >
        <styled.List
          data-test={'list'} >
          {users.map((user,i) => (
            <styled.ListItem
              data-test={'list-item'}
              key={i}
            >
                {user.name}
            </styled.ListItem>
          ))}
        </styled.List>
      </styled.Container>
    )
}

export default SideBar;
