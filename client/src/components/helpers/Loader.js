import React from 'react';
import { BeatLoader } from 'react-spinners'

const Loader = () => {
    return (
        <div className="loading-dimmer">
            <BeatLoader size={6} color="#999" />
        </div>
    );
};

export default Loader;