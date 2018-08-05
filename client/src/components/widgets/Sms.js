import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Actions
import { sendMessage } from '../../actions/messages'

// Components
import Widget from '../Widget'

class SmsWidget extends Component {
    
    render() {
        return (
            <Widget icon="MessageCircle" title="Sms" color="#666" render={
                () => {
                    return(
                        <React.Fragment>
                            <div>Send</div>
                        </React.Fragment>
                    )
                }
            } />
        )
    }
}

SmsWidget.propTypes = {
    sendMessage: PropTypes.func.isRequired
}

function mapStateToProps(state){
    return {
        
    }
}

export default connect(mapStateToProps, { sendMessage })(SmsWidget)