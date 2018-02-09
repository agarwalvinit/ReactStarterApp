import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => (
    <nav>
        <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to='/' >Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/users'>Users</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
        </ul> 
    </nav>
);

export default NavBar;