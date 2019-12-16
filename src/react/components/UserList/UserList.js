import React from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  height: 100%;
`;

const StyledListItem = styled.li`
  padding: 5px;
  border-bottom: solid 1px black;
`;

function UserList(props) {
  return (
    <StyledList data-test={"list"}>
      {props.users.map((user, i) => (
        <StyledListItem data-test={"list-item"} key={i}>
          {user.name}
        </StyledListItem>
      ))}
    </StyledList>
  );
}

export default UserList;
