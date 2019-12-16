import React from "react";
import styled from "styled-components";
import MyUserTag from "../UserTag/index";
import TextEditor from "../TextEditor/index";
import Console from "../Console/index";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
`;

function MainBar(props) {
  return (
    <StyledWrapper>
      <MyUserTag />
      <TextEditor />
      <Console />
    </StyledWrapper>
  );
}

export default MainBar;
