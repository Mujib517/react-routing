import React from 'react';
import { Redirect, Link, Switch, Route } from 'react-router-dom';

const Header = (props) => {

    return (
        <header>
            <nav>
                <div className="container">
                    <div className="navbar navbar-inverse">
                        <div className="navbar-header">
                            <div className="navbar-brand">React App</div>
                        </div>
                        <ul className="nav navbar-nav">
                            <li><Link className="active" to="/">Home</Link></li>
                            <li><Link to="/users">Users</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
};

export default Header;