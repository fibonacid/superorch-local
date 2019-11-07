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

  componentDidUpdate() {
    const { shared } = this.props;
    const { local } = this.state;
    const diffs = Diff.diffWordsWithSpace(local, shared);
    let text = "";
    diffs.forEach(part => {
      if (!part.removed) {
        text += part.value;
      }
    });
    if (this.state.local !== text) {
      this.setState({
        local: text
      });
    }
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
  shared: PropTypes.string
};

export default Document;
