import React from 'react';
import ReactDom from 'react-dom';
import NavBar from 'components/NavBar';
import Home from 'containers/Home';
import Users from 'containers/Users';
import SingleUser from 'containers/SingleUser';
import { Route, BrowserRouter} from 'react-router-dom'

const App = () => (
        <BrowserRouter>
            <div>
                <NavBar/>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/users'} component={Users} />
                <Route exact path={'/about'} render={() => <div>About</div>} />
                <Route exact path={'/users/:id'} component={SingleUser} />
            </div>
        </BrowserRouter>
);
ReactDom.render(<App />, document.getElementById('app'));