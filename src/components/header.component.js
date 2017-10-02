import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header>
            <nav>
                <div class="container">
                    <div class="navbar navbar-inverse">
                        <div class="navbar-header">
                            <div class="navbar-brand">React App</div>
                        </div>
                        <ul class="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
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