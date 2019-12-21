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
  const { appName, appVersion, server } = props;

  const handleUrlClick = () => {
    props.openExternalLink(server.url);
  };

  return (
    <StyledContainer data-test={"StatusBarComponent"}>
      <span data-test={"app-info"}>
        {appName} {appVersion}
      </span>
      {!server.isRunning ? (
        <span>Server offline</span>
      ) : (
        <a href="#" onClick={handleUrlClick}>
          Server online
        </a>
      )}
    </StyledContainer>
  );
}

StatusBar.propTypes = {
  appName: PropTypes.string,
  appVersion: PropTypes.string
};

export default StatusBar;
