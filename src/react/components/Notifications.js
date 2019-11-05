import React from 'react';
import {
  StyledList,
  StyledItem
} from "./styles/Notifications.styles";

function Notifications(props) {
  return (
    <StyledList>
      {props.notifications.map((notification, i) => (
        <StyledItem key={i}>{notification.message}</StyledItem>
      ))}
    </StyledList>
  )
}

export default Notifications;
