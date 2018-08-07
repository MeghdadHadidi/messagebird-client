import React, { Component } from 'react'
import className from 'classnames'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Actions
import { sendMessage } from '../actions/messages'

// Components
import Loader from './helpers/Loader'

class QuickSendForm extends Component {
    state = {
        form: {
            to: '',
            body: ''
        }
    }

    handleInputChange = (e) => {
        this.setState({
            form: {
                [e.target.name]: [e.target.value]
            }
        })
    }

    sendMessage = (e) => {
        e.preventDefault()
        this.props.sendMessage(this.state.form)
    }

    static propTypes = {
        sendMessage: PropTypes.func.isRequired,
    }

    render() {
        const { form } = this.state;
        const { loading } = this.props;
        return (
            <form className={className({'loading': loading})} onSubmit={this.sendMessage}>
                <Loader />
                <div className="form-input-group">
                    <label htmlFor="to">To</label>
                    <input id="to" type="text" name="to" onChange={this.handleInputChange} value={form.to} />
                </div>
                <div className="form-input-group">
                    <label htmlFor="body">Body</label>
                    <div id="body" contentEditable onChange={this.handleInputChange}>{form.body}</div>
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

export default connect(mapStateToProps, { sendMessage })(QuickSendForm)