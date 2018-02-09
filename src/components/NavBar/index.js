import React from 'react';

const NavBar = () => (
    <nav>
        <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href='/' >Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='/users'>Users</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
        </ul> 
    </nav>
);

export default NavBar;