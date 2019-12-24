import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import URLBar from "../URLBar/index";
import LoginToggle from "../LoginToggle";

const StyledContainer = styled.div`
  padding: 14px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

const StyledLink = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  color: black;
`;

function Header(props) {
  return (
    <StyledContainer data-test={"HeaderComponent"}>
      <StyledLink to="/join">Join</StyledLink>
    </StyledContainer>
  );
}

export default Header;
