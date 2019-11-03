import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components'
import {addMessage} from "../actions/actions";

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
      value: ""
    }
  }

  handleChange(e) {
    e.preventDefault();
    const { document } = this.props;
    this.setState({
      value: document.current + e.target.value
    });
  }

  handleClick(e) {
    const { value } = this.state;
    this.props.send({message: value});
  }

  render() {
    return (
      <StyledContainer>
        <StyledTextArea
          resizable={false}
          value={this.state.value}
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
