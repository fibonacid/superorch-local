import React, {Component} from 'react';
import {connect} from 'react-redux';

class Test extends Component {
    render() {
        return (
            <div>Test {this.props.counter}</div>
        )
    }
}

const mapStateToProps = (state) => ({
  counter: state.base.counter
});

export default connect(mapStateToProps)(Test);
