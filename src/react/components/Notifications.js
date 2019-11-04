import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

const StyledList = styled.ul`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

const StyledItem = styled.li`
  background: yellow;
  border: solid 1px black;
`;

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
