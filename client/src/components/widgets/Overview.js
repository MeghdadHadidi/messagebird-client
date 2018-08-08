import React, { Component } from 'react'
import className from 'classnames'
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
            <Widget style={{width: '150px' }} className="overview-widget" icon="Balance" loading={!balance} title="Balance" color="#666" render={
                () => {
                    return(
                        <React.Fragment>
                            <div className={className({"account-overview": true, "balance": true})} >
                                <span>Credit for sending message</span>
                                <strong className={className({"red-text": !(balance > 6)})}>{ balance }</strong>
                            </div>
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