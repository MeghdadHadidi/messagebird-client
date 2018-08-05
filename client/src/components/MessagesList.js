import React, { Component } from 'react'
import PropTypes from 'prop-types'
import className from 'classnames'
import { connect } from 'react-redux'

// Actions
import { getMessages } from '../actions/messages'

// Components
import Loader from './helpers/Loader'

class MessagesList extends Component {

    componentDidMount(){
        this.props.getMessages()
    }

    render(){
        const { messages, onItemClick, messagesCount, loading } = this.props;
        return (
            <div className={className({loading: loading})}>
                <Loader />
                <h2>Total: {messagesCount !== null ? messagesCount : '...'}</h2>
                <ul>
                    {messages.map(
                        (message, key) => <li key={key} onClick={() => onItemClick(message.id)}>From: { message.originator } Body: { message.body }</li>
                    )} 
                </ul>
            </div>
        )
    }
}

MessagesList.propTypes = {
    getMessages: PropTypes.func.isRequired,
    messages: PropTypes.array.isRequired,
    messagesCount: PropTypes.number.isRequired
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