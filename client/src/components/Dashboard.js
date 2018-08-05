import React from 'react';

import OverviewWidget from './widgets/Overview'
import SmsWidget from './widgets/Sms'

const Dashboard = () => {
    return (
        <div className="widgets-container">
            <OverviewWidget />
            <SmsWidget />
        </div>
    );
};

export default Dashboard;