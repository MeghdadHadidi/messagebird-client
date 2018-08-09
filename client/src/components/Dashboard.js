import React from 'react';

import BalanceWidget from './widgets/Balance'
import MessagesWidget from './widgets/Messages'
import SmsWidget from './widgets/Sms'

const Dashboard = () => {
    return (
        <div className="widgets-container">
            <BalanceWidget />
            <MessagesWidget />
            <SmsWidget />
        </div>
    );
};

export default Dashboard;