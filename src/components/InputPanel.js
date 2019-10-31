import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components'

const StyledContainer = styled.div`
  flex: 1;
  display: flex;
`;

const StyledTextArea = styled.textarea`
  flex: 1;
  margin: 0;
  border: none;
  font-family: monospace;
  text-indent: 10px;
  &:focus,
  &:hover,
  &:active {
    outline:0px !important;
    -webkit-appearance:none;
    box-shadow: none !important;
  }
`;

class InputPanel extends Component {
  render() {
    return (
      <StyledContainer>
        <StyledTextArea resizable={false} />
      </StyledContainer>
    )
  }
}

export default connect()(InputPanel);
