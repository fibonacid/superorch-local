import React from "react";
import styled from "styled-components/macro";
import UserList from "../UserList/index";

const StyledContainer = styled.div`
  border-right: solid 1px black;
  width: 200px;
  max-width: 300px;
  overflow-y: auto;
  position: relative;
`;

function SideBar(props) {
  return (
    <StyledContainer data-test={"SideBarComponent"}>
      <UserList />
    </StyledContainer>
  );
}

export default SideBar;
