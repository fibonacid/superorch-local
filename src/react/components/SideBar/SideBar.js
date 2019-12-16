import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import UserList from "../UserList/UserList";

const StyledContainer = styled.div`
  border-right: solid 1px black;
  width: 200px;
  max-width: 300px;
  overflow-y: auto;
  position: relative;
`;

const StyledFallback = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: grey;
`;

function SideBar(props) {
  return (
    <StyledContainer data-test={"SideBarComponent"}>
      {props.users.length === 0 ? (
        <StyledFallback>No users available</StyledFallback>
      ) : (
        <UserList users={props.users} />
      )}
    </StyledContainer>
  );
}

SideBar.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object)
};

export default SideBar;
