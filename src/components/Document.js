import React from 'react';
import styled from 'styled-components';
import ReadArea from "./ReadArea";
import WriteArea from "./WriteArea";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Document = props => (
  <StyledContainer>
    <ReadArea style="border-bottom: solid 1px black;" />
    <WriteArea/>
  </StyledContainer>
);

export default Document;
