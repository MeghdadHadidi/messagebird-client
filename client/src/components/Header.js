import React from 'react';

// Components
import Balance from './Balance'

const Header = ({ currentPage }) => (
    <header className="header-container">
        <h3>{currentPage.title}</h3>
        <div className="header-content">
            <Balance />
        </div>
    </header>
)

export default Header