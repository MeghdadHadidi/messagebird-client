import React from 'react';

const Content = ({ children }) => {
    return (
        <div className="container">
            <h5>Sms widgets</h5>
            { children }
        </div>
    );
};

export default Content;