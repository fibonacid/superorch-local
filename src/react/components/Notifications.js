import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledList,
  StyledItem
} from "./styles/Notifications.styles";

function Notifications(props) {
  return (
    <StyledList data-test={'NotificationsComponent'}>
      {props.notifications.map((notification, i) => (
        <StyledItem
          key={i}
          data-test={'list-item'}
        >
          {notification.message}
        </StyledItem>
      ))}
    </StyledList>
  )
}

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.object)
};

export default Notifications;
