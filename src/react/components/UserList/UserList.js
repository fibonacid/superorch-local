import React from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  height: 100%;
`;

const StyledListItem = styled.li`
  padding: 5px;
  border-bottom: solid 1px black;
  display: flex;
  font-size: 15px;
  cursor: pointer;
`;

function UserList(props) {
  const handleClick = ({ id: userId }) => {
    console.log(userId);
  };

  return (
    <StyledList data-test={"list"}>
      {props.users.map((user, i) => (
        <StyledListItem
          key={i}
          data-test={"list-item"}
          onClick={() => handleClick(user)}
        >
          {user.id === props.myUserId ? "You" : user.name}
        </StyledListItem>
      ))}
    </StyledList>
  );
}

export default UserList;
