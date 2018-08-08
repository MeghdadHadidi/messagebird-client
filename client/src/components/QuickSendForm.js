import React, { Component } from 'react'
import className from 'classnames'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Actions
import { sendMessage, getMessages } from '../actions/messages'
import { getBalance } from '../actions/balance'

// Components
import Loader from './helpers/Loader'

class QuickSendForm extends Component {
    state = {
        form: {
            recipients: '',
            body: ''
        }
    }

    handleInputChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    sendMessage = (e) => {
        e.preventDefault()
        let messageObject = Object.assign({}, this.state.form);
        messageObject.recipients = messageObject.recipients.split(',');
        this.props.sendMessage(messageObject).then(() => {
            this.props.getMessages()
            this.props.getBalance()
        })
    }

    static propTypes = {
        sendMessage: PropTypes.func.isRequired,
        getBalance: PropTypes.func.isRequired,
        getMessages: PropTypes.func.isRequired
    }

    render() {
        const { form } = this.state;
        const { loading } = this.props;
        return (
            <form className={className({'loading': loading})} onSubmit={this.sendMessage}>
                <Loader />
                <div className="form-input-group">
                    <label htmlFor="recipients">Recipients</label>
                    <input id="recipients" type="text" name="recipients" onChange={this.handleInputChange} value={form.recipients} />
                </div>
                <div className="form-input-group">
                    <label htmlFor="body">Body</label>
                    <textarea id="body" name="body" value={form.body} onChange={this.handleInputChange} />
                </div>
                <button type="submit" className="button primary">Send</button>
            </form>
        )
    }
}

function mapStateToProps(state){
    return {
        loading: state.messages.sending
    }
}

export default connect(mapStateToProps, { sendMessage, getMessages, getBalance })(QuickSendForm)