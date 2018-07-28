import React from 'react'

const MessagesList = props => {
    const { messages, onItemClick, messagesCount } = props;
    if(messages === null){
        return(<p>Loading messages...</p>)
    }
    else{
        return (
            <React.Fragment>
                <h2>Messages: (Total: {messagesCount !== null ? messagesCount : '...'})</h2>
                <ul>
                    {messages.map(
                        (message, key) => <li key={key} onClick={() => onItemClick(message.id)}>From: { message.originator } Body: { message.body }</li>
                    )} 
                </ul>
            </React.Fragment>
        )
    }
}

export default MessagesList;