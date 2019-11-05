import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components'
import {addMessage} from "../actions/actions";

const Diff = require('diff');

const resetAppearence = `
  &:focus,
  &:hover,
  &:active {
    outline:0px !important;
    -webkit-appearance:none;
    box-shadow: none !important;
  }
`;

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
  ${resetAppearence}
`;

const StyledButton = styled.button`
  display: block;
  -webkit-appearance:none;
  padding: 2.5px;
  background: black;
  color: white;
  font-weight: bold;
  border: 0;
  ${resetAppearence}
  &:active { background: grey; }
`;

class Document extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: props.document.shared,
    };
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const { shared } = nextProps.document;
    const diffs = Diff.diffWordsWithSpace(this.state.input, shared);
    let newInput = "";
    diffs.forEach(part => {
      if (!part.removed) {
        newInput += part.value;
      }
    });
    this.setState({
      input: newInput
    });
    console.log(diffs);
  }

  handleChange(e) {
    e.preventDefault();
    const { document } = this.props;
    this.setState({
      input: e.target.value,
    });
  }

  handleClick(e) {
    const { input } = this.state;
    this.props.send(input);
  }

  render() {
    return (
      <StyledContainer>
        <StyledTextArea
          resizable={false}
          value={this.state.input}
          onChange={e => {this.handleChange(e)}} />
        <StyledButton
          onClick={e => {this.handleClick(e)}}
        >SEND</StyledButton>
      </StyledContainer>
    )
  }
}

const mapStateToProps = state => ({
  document: state.chat.document
});

const mapDispatchToProps = dispatch => ({
  send: (message) => dispatch(addMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(Document);
