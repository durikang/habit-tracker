import React from 'react';
import './Header.module.css';

const Header = ({onLogout}) => (
    <Header>
        {onLogout && <button onClick={onLogout}>Logout</button>}
        <img src="/images/logo.png"alt="logo"/>
        <h1>Business Card Maker</h1>
    </Header>
);

export default Header;