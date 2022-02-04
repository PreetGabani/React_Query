import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container-fluid justify-content-lg-center">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/WithoutRQ">WithoutRQ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/WithRQ">WithRQ</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
};

export default Nav;
