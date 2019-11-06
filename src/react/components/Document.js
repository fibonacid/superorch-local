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
    /*const { shared } = this.props.document;
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
    console.log(diffs);*/
  }

  handleChange(e) {
    const { document } = this.props;
    this.setState({
      local: e.target.value,
    });
  }

  handleClick(e) {
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
          onChange={e => {this.handleChange(e)}} />
        <styled.Button
          data-test={'button'}
          onClick={e => {this.handleClick(e)}}
        >SEND</styled.Button>
      </styled.Container>
    )
  }
}

Document.propTypes = {
  shared: PropTypes.string
};

export default Document;
