import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Actions
import { sendMessage } from '../actions/messages'

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

    sendMessage = () => {
        this.props.sendMessage(this.state.form)
    }

    static propTypes = {
        sendMessage: PropTypes.func.isRequired,
    }

    render() {
        const { form } = this.state;
        return (
            <form onSubmit={this.sendMessage}>
                <div className="form-input-group">
                    <label for="to">To</label>
                    <input id="to" type="text" name="to" onChange={this.handleInputChange} value={form.to} />
                </div>
                <div className="form-input-group">
                    <label for="body">Body</label>
                    <div id="body" contentEditable onChange={this.handleInputChange}>{form.body}</div>
                </div>
                <button type="submit" className="button primary">Send</button>
            </form>
        )
    }
}

function mapStateToProps(state){
    return {}
}

export default connect(mapStateToProps, { sendMessage })(QuickSendForm)