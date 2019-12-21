import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  background: rgb(20, 20, 20);
  flex: 0 1 35%;
  color: white;
  padding: 5px;
  font-family: monospace;
  overflow-y: auto;
`;

export default function Console(props) {
  return (
    <StyledContainer>
      <ul>
        {props.queries.map((query, i) => {
          const user = props.users.find(user => user.id === query.userId);
          if (query.output) {
            return (
              <li key={i}>
                {user && <span>{user.name}~</span>}
                {<span> > {query.output}</span>}
              </li>
            );
          }
        })}
      </ul>
    </StyledContainer>
  );
}
