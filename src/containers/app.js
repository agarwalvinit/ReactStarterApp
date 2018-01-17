import React, { Component } from 'react';
import Button from '../components/button';

class App extends Component {
  state = { value: 0 };

  increment = () => {
    this.setState(prevState => ({
      value: prevState.value + 1
    }));
  };

  decrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1
    }));
  };

  reset = () => {
    this.setState({
      value: 0
    });
  }
  
  render() {
    return (
      <div>
        {this.state.value}
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.reset}>reset</Button>
      </div>
    )
  }
}

export default App;