import React from 'react';
import { FiMessageCircle } from 'react-icons/fi'

const Widget = props => {
    return (
        <div className="widget">
            <h5>
                <FiMessageCircle size="21" color="#ccc" />
                Widget Name
            </h5>
            <div>
                Widget content goes here
            </div>
        </div>
    );
};

export default Widget;