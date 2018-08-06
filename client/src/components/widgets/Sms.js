import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Actions
import { sendMessage } from '../../actions/messages'

// Components
import Widget from '../Widget'
import QuickSendForm from '../QuickSendForm'

class SmsWidget extends Component {
    
    render() {
        return (
            <Widget icon="MessageCircle" title="SMS" color="#666" render={
                () => {
                    return(
                        <React.Fragment>
                            <QuickSendForm />
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