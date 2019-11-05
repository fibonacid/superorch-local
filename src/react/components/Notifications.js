import React from 'react';
import {connect} from 'react-redux';
import {
  StyledList,
  StyledItem
} from "./styles/Notifications.styles";

const Notifications = (props) => (
  <StyledList>
    {props.notifications.map((notification, i) => (
      <StyledItem key={i}>{notification.message}</StyledItem>
    ))}
  </StyledList>
);

const mapStateToProps = state => ({
  notifications: state.notifications
});

export default connect(mapStateToProps)(Notifications)
