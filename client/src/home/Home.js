import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function home() {
    return (
        <React.Fragment>

        <h2>Hello</h2>
        <ul>
            <li><Link to={'feed/ab'}>Alberta</Link></li>
            <li><Link to={'feed/bc'}>British Columbia</Link></li>
            <li><Link to={'feed/ont'}>Ontario</Link></li>
            <li><Link to={'feed/man'}>Manitoba</Link></li>
            {/* <Link to={'feed/'}></Link>
            <Link to={'feed/'}></Link>
            <Link to={'feed/'}></Link>
            <Link to={'feed/'}></Link>
            <Link to={'feed/'}></Link>
        <Link to={'feed/'}></Link> */}
        </ul>
        </React.Fragment>
    )
}

export default home;