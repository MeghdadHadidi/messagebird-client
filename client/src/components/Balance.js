import React from 'react';

const Balance = ({ balance }) => {
    return (
        <div className="balance-container">
            { balance !== null ? `Your balance is ${balance} ` : 'Loading balance...' }
        </div>
    );
};

export default Balance;