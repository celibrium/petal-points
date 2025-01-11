import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar(){
    return (
        <nav className="navbar">
            <h1 className="navbar-title">Petal Points</h1>
            <ul className="navbar-links">
                <li>
                    <NavLink to="/"
                    className={({ isActive }) => isActive ? 'active-link' : ''}
                    >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/tasks"
                    className={({ isActive }) => isActive ? 'active-link' : ''}
                    >Tasks</NavLink>
                </li>
                <li>
                    <NavLink to="/store"
                    className={({ isActive }) => isActive ? 'active-link' : ''}
                    >Store</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;