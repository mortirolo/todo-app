import React from 'react';
// When using routers in React you cannot use <a> tags for links within a router
// You must use Link for links in a router
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;