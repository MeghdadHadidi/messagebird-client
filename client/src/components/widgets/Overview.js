import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Actions
import { getBalance } from '../../actions/balance'
import { getMessages } from '../../actions/messages'

// Components
import Widget from '../Widget'

class OverviewWidget extends Component {

    componentDidMount(){
        this.props.getMessages()
    }
    
    render() {
        const { balance, messageCount } = this.props;
        return (
            <Widget icon="Book" loading={!balance} title="Overview" color="#666" render={
                () => {
                    return(
                        <React.Fragment>
                            <div>Balance: { balance } </div>
                            <div>Sent: { messageCount } </div>
                        </React.Fragment>
                    )
                }
            } />
        )
    }
}

OverviewWidget.propTypes = {
    getBalance: PropTypes.func.isRequired,
    balance: PropTypes.number.isRequired,
    messageCount: PropTypes.number.isRequired,
    getMessages: PropTypes.func.isRequired
}

function mapStateToProps(state){
    return {
        balance: state.balance.amount,
        messageCount: state.messages.count
    }
}

export default connect(mapStateToProps, { getBalance, getMessages })(OverviewWidget)