import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components'

const StyledContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-bottom: solid 1px black;
`;

const StyledWrapper = styled.div`
  flex: 1;
  margin: 0;
  border: none;
  font-family: monospace;
  padding-top: 10px;
  padding-left: 10px;
  overflow: auto;
`;

class ReadArea extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
  }

  render() {
    return (
      <StyledContainer>
        <StyledWrapper>
          {this.props.document}
        </StyledWrapper>
      </StyledContainer>
    )
  }
}

const mapStateToProps = state => ({
  document: state.document
});

export default connect(mapStateToProps)(ReadArea);
