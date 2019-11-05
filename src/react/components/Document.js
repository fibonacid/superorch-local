import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addMessage} from "../actions/actions";
import * as styled from './styles/Document.styles'

const Diff = require('diff');

class Document extends Component {

  constructor(props) {
    super(props);
    this.state = {
      local: props.document.shared,
      shared: props.document.shared
    };
  }

  componentDidUpdate() {
    const { shared } = this.props.document;
    const { input, local } = this.state;
    const diffs = Diff.diffWordsWithSpace(local, shared);
    let text = "";
    diffs.forEach(part => {
      if (!part.removed) {
        text += part.value;
      }
    });
    this.setState({
      local: text
    });
    console.log(diffs);
  }

  handleChange(e) {
    e.preventDefault();
    const { document } = this.props;
    this.setState({
      local: e.target.value,
    });
  }

  handleClick(e) {
    const { input } = this.state;
    this.props.send(input);
  }

  render() {
    return (
      <styled.Container>
        <styled.TextArea
          resizable={false}
          value={this.state.input}
          onChange={e => {this.handleChange(e)}} />
        <styled.Button
          onClick={e => {this.handleClick(e)}}
        >SEND</styled.Button>
      </styled.Container>
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
