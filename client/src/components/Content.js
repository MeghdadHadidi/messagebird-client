import React from 'react';

const Content = ({ children, currentPage }) => {
    return (
        <div className="container">
            <h5>{currentPage.description}</h5>
            <div className="page-container">
                { children }
            </div>
        </div>
    );
};

export default Content;