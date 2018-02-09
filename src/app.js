import React from 'react';
import ReactDom from 'react-dom';
import NavBar from 'components/NavBar';
import Home from 'containers/Home';
import Users from 'containers/Users';
import SingleUser from 'containers/SingleUser';

const App = () => (
<div>Lets start routing</div>
);
ReactDom.render(<App />, document.getElementById('app'));