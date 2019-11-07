import React from 'react';
import PropTypes from 'prop-types';
import * as styled from "./styles/Notifications.styles";

function Notifications(props) {
  return (
    <styled.List data-test={'NotificationsComponent'}>
      {props.notifications.map((notification, i) => (
        <styled.FlashMessage key={i}>
          {notification.message}
        </styled.FlashMessage>
      ))}
    </styled.List>
  )
}

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.object)
};

export default Notifications;
