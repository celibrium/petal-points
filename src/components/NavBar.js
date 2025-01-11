import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar(){
    return (
        <nav className="navbar">
            <h1 className="navbar-title">Pet Buddy</h1>
            <ul className="navbar-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/tasks">Tasks</Link>
                </li>
                <li>
                    <Link to="/store">Store</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;