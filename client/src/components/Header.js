import React from 'react';

// Components
import Balance from './Balance'

const Header = () => (
    <header className="header-container">
        <h3>Dashboard</h3>
        <div className="header-content">
            <Balance />
        </div>
    </header>
)

export default Header