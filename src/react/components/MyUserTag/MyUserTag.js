import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 10px;
  border-bottom: solid 1px black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledUsername = styled.h2``;

const StyledEdit = styled.span`
  cursor: pointer;
`;

function MyUserTag(props) {
  return (
    <StyledContainer>
      <StyledUsername>Lorenzo</StyledUsername>
      <StyledEdit>Edit</StyledEdit>
    </StyledContainer>
  );
}

export default MyUserTag;
