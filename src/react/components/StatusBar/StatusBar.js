import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

const StyledContainer = styled.div`
  padding: 5px;
  font-size: 14px;
  flex: 0 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledConnected = styled.span`
  color: ${props => (props.isConnected ? "green" : "red")};
`;

function StatusBar(props) {
  const { appName, appVersion } = props;
  return (
    <StyledContainer data-test={"StatusBarComponent"}>
      <span data-test={"app-info"}>
        {appName} {appVersion}
      </span>
      <StyledConnected isConnected={props.isConnected}>
        {props.isConnected ? "connected" : "not connected"}
      </StyledConnected>
    </StyledContainer>
  );
}

StatusBar.propTypes = {
  appName: PropTypes.string,
  appVersion: PropTypes.string,
  isConnected: PropTypes.bool.isRequired
};

export default StatusBar;
