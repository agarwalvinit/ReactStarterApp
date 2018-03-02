import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Home from './containers/home';
import reducer from './reducer';

const store = createStore(reducer);

ReactDOM.render( 
<Provider store={store}>
  <Home /> 
</Provider>
  , document.getElementById('app'));
