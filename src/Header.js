import React from 'react';
import logo from "./logo.svg"
import './Header.css'

function Header() {
    return (
        <div>
            <header className="header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Edit <code className="test">src/App.js</code> and save to reload.</h1>
            </header>
        </div>
    )
}

export default Header