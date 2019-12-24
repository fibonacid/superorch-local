import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm/index";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
`;

const StyledLink = styled(Link)`
  margin-top: 8px;
  text-decoration: none;
  color: black;
`;

export default function Join(props) {
  return (
    <StyledContainer>
      <LoginForm />
      <StyledLink to={"/"}>go back</StyledLink>
    </StyledContainer>
  );
}
