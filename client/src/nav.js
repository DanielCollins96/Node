import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <Link to="/">Provinces</Link>
            <ul className="nav-links">
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
            </ul>
        </nav>
    );
}
export default Nav;