import React from 'react';

const Balance = ({ balance }) => {
    return (
        <React.Fragment>
            { balance !== null ? `Your balance is ${balance} ` : 'Loading balance...' }
        </React.Fragment>
    );
};

export default Balance;