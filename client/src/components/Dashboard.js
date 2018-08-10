import React from 'react';

import BalanceWidget from './widgets/Balance'
import MessagesWidget from './widgets/Messages'
import SmsWidget from './widgets/Sms'
import ContactsWidget from './widgets/Contacts'

const Dashboard = () => {
    return (
        <div className="widgets-container">
            <BalanceWidget />
            <MessagesWidget />
            <ContactsWidget />
            <SmsWidget />
        </div>
    );
};

export default Dashboard;