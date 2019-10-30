import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components'

const StyledTextArea = styled.textarea`
  width: 100%;
  min-height: 500px;
  flex: 1;
`;

class Document extends Component {
  render() {
    return (
      <StyledTextArea />
    )
  }
}

export default connect()(Document);
