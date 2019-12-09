import React from "react";
import styled from "styled-components";
import SideBar from "../components/SideBar";
import TextEditor from "../components/TextEditor";

export const StyledWrapper = styled.div`
  flex: 1 1 100%;
  overflow-y: auto;
  display: flex;
  border-top: solid 1px black;
  border-bottom: solid 1px black;
`;

export default function Client() {
  return (
    <StyledWrapper>
      <SideBar />
      <TextEditor />
    </StyledWrapper>
  );
}
