import React from "react";
import styled from "styled-components/macro";
import URLBar from "../URLBar/index";
import LoginToggle from "../LoginToggle";

const StyledContainer = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 8px;
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Header(props) {
  return (
    <StyledContainer data-test={"HeaderComponent"}>
      <URLBar />
      <LoginToggle />
    </StyledContainer>
  );
}

export default Header;
