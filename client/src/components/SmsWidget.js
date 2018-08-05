import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Actions
import { getBalance } from '../actions/balance'

// Components
import Widget from './Widget'

class SmsWidget extends Component {

    componentDidMount(){
        this.props.getBalance()
    }
    
    render() {
        const { balance } = this.props;
        return (
            <Widget icon="MessageCircle" loading={!balance} title="SMS" color="#666" render={
                () => {
                    return(
                        <div>Balance: { balance } </div>
                    )
                }
            } />
        )
    }
}

SmsWidget.propTypes = {
    getBalance: PropTypes.func.isRequired,
    balance: PropTypes.number
}

function mapStateToProps(state){
    return {
        balance: state.balance.amount
    }
}

export default connect(mapStateToProps, { getBalance })(SmsWidget)