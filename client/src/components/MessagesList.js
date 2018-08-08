import React, { Component } from 'react'
import className from 'classnames'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Actions
import { getMessages, getMessageDetail } from '../actions/messages'

// Components
import Loader from './helpers/Loader'

class MessagesList extends Component {

    componentDidMount(){
        this.props.getMessages()
    }

    render(){
        const { messages, getMessageDetail, messagesCount } = this.props;
        return (
            <div className={className({'messages-list': true, 'loading': this.props.loading})}>
                <Loader />
                <h2>Total: {messagesCount}</h2>
                <table>
                    <thead>
                        <tr>
                            <th style={{width: '40px'}}>#</th>
                            <th style={{width: '200px'}}>From</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {messages.map(
                            (message, key) => <tr key={key} onClick={() => getMessageDetail(message.id)}><td>{key+1}</td><td>{ message.originator }</td><td>{ message.body }</td></tr>
                        )} 
                    </tbody>
                </table>
            </div>
        )
    }
}

MessagesList.propTypes = {
    getMessages: PropTypes.func.isRequired,
    messages: PropTypes.array.isRequired,
    onItemClick: PropTypes.func.isRequired,
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

export default connect(mapStateToProps, { getMessages, getMessageDetail })(MessagesList);