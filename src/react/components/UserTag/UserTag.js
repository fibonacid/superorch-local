import React, { useState } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 10px;
  border-bottom: solid 1px black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function UserTag(props) {
  const [isEditable, setEditable] = useState(false);
  const [userName, setUserName] = useState(props.user.name);

  const handleDone = () => {
    props.updateUsername(props.user.id, userName);
    setEditable(!isEditable);
  };

  const handleEdit = () => {
    setEditable(!isEditable);
  };

  return (
    <StyledContainer>
      {isEditable ? (
        <>
          <input value={userName} onChange={e => setUserName(e.target.value)} />
          <button onClick={handleDone}>Done</button>
        </>
      ) : (
        <>
          <span>{props.user.name}</span>
          <button
            disabled={props.user.id !== props.myUserId}
            onClick={handleEdit}
          >
            Edit
          </button>
        </>
      )}
    </StyledContainer>
  );
}

UserTag.defaultProps = {
  user: {
    name: "Anonymous"
  }
};

export default UserTag;
