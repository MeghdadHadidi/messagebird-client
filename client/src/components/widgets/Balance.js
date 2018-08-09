import React, { Component } from 'react'
import className from 'classnames'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Actions
import { getBalance } from '../../actions/balance'
import { getMessages } from '../../actions/messages'

// Components
import Widget from '../Widget'

class BalanceWidget extends Component {

    componentDidMount(){
        this.props.getMessages()
    }
    
    render() {
        const { balance, loading } = this.props;
        return (
            <Widget style={{width: '150px' }} className="overview-widget" icon="BatteryCharging" loading={loading} title="Balance" color="#666" render={
                () => {
                    return(
                        <React.Fragment>
                            <div className={className({"account-overview": true, "balance": true})} >
                                <strong className={className({"red-text": !(balance > 6)})}>{ balance }</strong>
                                <span>Credit for sending message</span>
                            </div>
                        </React.Fragment>
                    )
                }
            } />
        )
    }
}

BalanceWidget.propTypes = {
    loading: PropTypes.bool.isRequired,
    getBalance: PropTypes.func.isRequired,
    balance: PropTypes.number.isRequired,
    messageCount: PropTypes.number.isRequired,
    getMessages: PropTypes.func.isRequired
}

function mapStateToProps(state){
    return {
        loading: state.balance.fetching,
        balance: state.balance.amount,
        errors: state.balance.errors,
        messageCount: state.messages.count
    }
}

export default connect(mapStateToProps, { getBalance, getMessages })(BalanceWidget)