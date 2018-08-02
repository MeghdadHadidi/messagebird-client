import React from 'react';

const Balance = ({ balance }) => {
    return (
        <div className="balance-container">
            { balance !== null ? `Balance: ${balance} ` : 'Loading balance...' }
        </div>
    );
};

export default Balance;