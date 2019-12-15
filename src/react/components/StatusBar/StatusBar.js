import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import { IoMdRadioButtonOn } from "react-icons/io";

const StyledContainer = styled.div`
  padding: 5px;
  font-size: 14px;
  flex: 0 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledCircle = styled(IoMdRadioButtonOn)`
  vertical-align: middle;
`;

function StatusBar(props) {
  const { appName, appVersion } = props;
  return (
    <StyledContainer data-test={"StatusBarComponent"}>
      <span data-test={"app-info"}>
        {appName} {appVersion}
      </span>
      <StyledCircle color={props.isConnected ? "green" : "red"} />
    </StyledContainer>
  );
}

StatusBar.propTypes = {
  appName: PropTypes.string,
  appVersion: PropTypes.string,
  isConnected: PropTypes.bool.isRequired
};

export default StatusBar;
