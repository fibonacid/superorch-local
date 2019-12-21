import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  position: absolute;
  right: 15px;
`;

const StyledSpan = styled.div`
  cursor: pointer;
  font-size: 15px;
`;

function LoginToggle(props) {
  return (
    <StyledContainer>
      {props.isLoggedIn ? (
        <StyledSpan onClick={props.logout}>Logout</StyledSpan>
      ) : (
        <StyledSpan onClick={props.login}>Login</StyledSpan>
      )}
    </StyledContainer>
  );
}

export default LoginToggle;
