import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro'
import {resetAppearance} from "../utils/styles";

const StyledContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const StyledTextArea = styled.textarea`
  flex: 1;
  margin: 0;
  border: none;
  font-family: monospace;
  padding-top: 10px;
  padding-left: 10px;
  ${resetAppearance()}
`;

const StyledButton = styled.button`
  display: block;
  -webkit-appearance:none;
  padding: 2.5px;
  background: black;
  color: white;
  font-weight: bold;
  border: 0;
  &:active { background: grey; }
  ${resetAppearance()}
`;


// This module helps finding
// differences in text buffers
const Diff = require('diff');

/**
 * DOCUMENT COMPONENT
 * ==================
 */
class Document extends Component {

  constructor(props) {
    super(props);
    this.state = {
      local: props.shared
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { shared } = this.props;
    const { local } = this.state;
    let text = local;
    // If shared document has changed:
    if (prevProps.shared !== this.props.shared) {
      text = this.mergeText(local, shared);
    } else {
      text = this.mergeText(shared, local);
    }
    console.log({ shared, local });

    // Avoid infinite loop
    if (this.state.local !== text) {
      this.setState({
        local: text
      });
    }
  }

  mergeText(a, b) {
    const diffs = Diff.diffChars(a, b);
    let text = "";
    diffs.forEach(part => {
      if (!part.removed) {
        text += part.value;
      }
    });
    console.log(diffs);
    return text;
  }

  handleChange(event) {
    this.setState({
      local: event.target.value,
    });
    this.props.send(event.target.value);
  }

  handleClick() {
    const { local } = this.state;
    this.props.send(local);
  }

  render() {
    return (
      <StyledContainer
        data-test={'DocumentComponent'}>
        <StyledTextArea
          data-test={'textarea'}
          resizable={false}
          value={this.state.local}
          onChange={this.handleChange.bind(this)} />
        <StyledButton
          data-test={'button'}
          onClick={this.handleClick.bind(this)}
        >SEND</StyledButton>
      </StyledContainer>
    )
  }
}

Document.propTypes = {
  shared: PropTypes.string,
  send: PropTypes.func
};

export default Document;
