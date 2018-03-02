import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../components/button';
import * as actions from './actions';


class Home extends Component {
  increment = () => {
    this.props.onIncrement();
  };

  decrement = () => {
    this.props.onDecrement();
  };

  reset = () => {
    this.props.onReset();
  }
  
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.counter}
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.reset}>reset</Button>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onReset: () => dispatch(actions.reset()),
    dispatch,
  };
}
function mapStateToProps(state){
  return {
    counter: state.counterReducer,
  };
}
export default connect (mapStateToProps,mapDispatchToProps)(Home);