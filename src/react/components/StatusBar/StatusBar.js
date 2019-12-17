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

function StatusBar(props) {
  const { appName, appVersion } = props;
  const { address, port } = props.server;
  return (
    <StyledContainer data-test={"StatusBarComponent"}>
      <span data-test={"app-info"}>
        {appName} {appVersion}
      </span>
      {props.server.isRunning && address && port ? (
        <a href={`http://${address}:${port}`}>Server online</a>
      ) : (
        <span>Server offline</span>
      )}
    </StyledContainer>
  );
}

StatusBar.propTypes = {
  appName: PropTypes.string,
  appVersion: PropTypes.string
};

export default StatusBar;
