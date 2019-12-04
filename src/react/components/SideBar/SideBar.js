import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

const StyledContainer = styled.div`
  border-right: solid 1px black;
  width: 200px;
  max-width: 300px;
  overflow-y: auto;
`;

const StyledList = styled.ul`
  height: 100%;
`;

const StyledListItem = styled.li`
  padding: 5px;
  border-bottom: solid 1px black;
`;

function SideBar(props) {
  const { users } = props;
  return (
    <StyledContainer data-test={"SideBarComponent"}>
      <StyledList data-test={"list"}>
        {users.map((user, i) => (
          <StyledListItem data-test={"list-item"} key={i}>
            {user.name} #{user.id}
          </StyledListItem>
        ))}
      </StyledList>
    </StyledContainer>
  );
}

SideBar.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object)
};

export default SideBar;
