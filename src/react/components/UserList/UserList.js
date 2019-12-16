import _ from "lodash";
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
    props.displayUser(userId);
  };

  let users = [];
  let myUser = props.users.find(user => user.id === props.myUserId);

  if (myUser) {
    users.push(myUser);
  }

  let orderedUsers = [
    ...users,
    ...props.users.filter(user => user.id !== props.myUserId)
  ];

  return (
    <StyledList data-test={"list"}>
      {orderedUsers.map((user, i) => (
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
