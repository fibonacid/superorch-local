import React from 'react';
import PropTypes from 'prop-types';
import FlashMessage from "./FlashMessage";

function Notifications(props) {
  return (
    <ul data-test={'NotificationsComponent'}>
      {props.notifications.map((notification, i) => (
        <FlashMessage key={i}>
          {notification.message}
        </FlashMessage>
      ))}
    </ul>
  )
}

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.object)
};

export default Notifications;
