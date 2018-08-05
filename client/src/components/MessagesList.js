import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Actions
import { getMessages } from '../actions/messages'

class MessagesList extends Component {

    componentDidMount(){
        this.props.getMessages()
    }

    render(){
        const { messages, onItemClick, messagesCount } = this.props;
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
}

MessagesList.propTypes = {
    getMessages: PropTypes.func.isRequired,
    messages: PropTypes.array.isRequired,
    count: PropTypes.number.isRequired
}

function mapStateToProps(state){
    return {
        messages: state.messages.items,
        messagesCount: state.messages.count,
        loading: !state.messages.fetched,
        offset: state.messages.offset
    }
}

export default connect(mapStateToProps, { getMessages })(MessagesList);