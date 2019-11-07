import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as styled from './styles/Document.styles'

const Diff = require('diff');

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

  }

  handleClick() {
    const { local } = this.state;
    this.props.send(local);
  }

  render() {
    return (
      <styled.Container
        data-test={'DocumentComponent'}>
        <styled.TextArea
          data-test={'textarea'}
          resizable={false}
          value={this.state.local}
          onChange={this.handleChange.bind(this)} />
        <styled.Button
          data-test={'button'}
          onClick={this.handleClick.bind(this)}
        >SEND</styled.Button>
      </styled.Container>
    )
  }
}

Document.propTypes = {
  shared: PropTypes.string,
  send: PropTypes.func
};

export default Document;
