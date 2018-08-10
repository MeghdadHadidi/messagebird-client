import React, { Component } from 'react'
import className from 'classnames'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Components
import Widget from '../Widget'
import MessagesList from '../MessagesList'

class MessagesWidget extends Component {
    
    render() {
        const { messageCount, loading } = this.props;
        return (
            <Widget style={{width: '300px' }} className="messages-widget" icon="List" loading={loading} title="Messages" color="#666" render={
                () => {
                    return(
                        <React.Fragment>
                            <div className={className({"account-overview": true, "messages": true})} >
                                <strong>{ messageCount }</strong>
                            </div>
                            <div className="messages-widget-list">
                                <MessagesList render={ (props) => {
                                    return(
                                        <ul>
                                            { props.messages.map((message, key) => {
                                                if(key < 5){
                                                    return <li key={key}>
                                                        <div>{message.body}</div>
                                                        {message.direction === 'mt' ? ' > ' : ' < '} 
                                                        <span>{message.recipients && message.recipients.items.length && message.recipients.items[0].recipient}</span>
                                                    </li>
                                                }
                                                
                                                return ''
                                            }) }
                                        </ul>
                                    )
                                }} />
                            </div>
                            <div className="widget-footer">
                                <Link className="button" to="/messages">More</Link>
                            </div>
                        </React.Fragment>
                    )
                }
            } />
        )
    }
}

MessagesWidget.propTypes = {
    loading: PropTypes.bool.isRequired,
    messageCount: PropTypes.number.isRequired
}

function mapStateToProps(state){
    return {
        loading: state.messages.fetching,
        errors: state.messages.errors,
        messageCount: state.messages.count
    }
}

export default connect(mapStateToProps, {})(MessagesWidget)