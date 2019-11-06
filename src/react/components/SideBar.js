import React from 'react'
import * as styled from './styles/SideBar.styles'
import PropTypes from 'prop-types';

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

SideBar.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object)
};

export default SideBar;
