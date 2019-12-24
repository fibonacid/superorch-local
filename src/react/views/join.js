import React from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm/LoginForm";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
`;

export default function Join(props) {
  return (
    <StyledContainer>
      <LoginForm />
    </StyledContainer>
  );
}
