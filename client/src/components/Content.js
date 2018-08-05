import React from 'react';

const Content = ({ children }) => {
    return (
        <div className="container">
            <h5>Widgets</h5>
            <div className="widgets-container">
                { children }
            </div>
        </div>
    );
};

export default Content;