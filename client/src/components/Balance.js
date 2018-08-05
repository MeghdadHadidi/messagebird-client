import React, { Component } from 'react';
import className from 'classnames'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Components
import Loader from './helpers/Loader'

// Actions
import { getBalance } from '../actions/balance'

class Balance extends Component {

    componentDidMount(){
        this.props.getBalance()
    }

    render(){
        const { balance, loading } = this.props;

        return (
            <div className={className({'balance-container': true, 'loading': loading})}>
                <Loader />
                <span>{ balance !== null ? `Balance: ${balance} ` : 'Loading balance...' }</span>
            </div>
        );
    }
};

Balance.propTypes = {
    loading: PropTypes.bool.isRequired,
    balance: PropTypes.number.isRequired,
    getBalance: PropTypes.func.isRequired
}

function mapStateToProps(state){
    return {
        loading: state.balance.fetching,
        balance: state.balance.amount
    }
}

export default connect(mapStateToProps, { getBalance })(Balance);