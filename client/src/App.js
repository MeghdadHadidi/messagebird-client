import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Actions
import { getBalance } from './actions/balance'
import { getMessages, sendMessage, getMessageDetail } from './actions/messages'

// Components
import MessagesList from './components/MessagesList'
import Balance from './components/Balance';

class App extends Component {

  componentDidMount(){
    this.props.getBalance()
    this.props.getMessages()
  }

  render() {
    const { balance, messages, messagesCount, sendMessage, getMessageDetail } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Message</h1>
        </header>
        <p className="App-intro">
          <Balance balance={ balance } />
        </p>
        <MessagesList messagesCount={messagesCount} onItemClick={getMessageDetail} messages={messages} />

        <button onClick={sendMessage}>Send</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    balance: state.balance.fetching ? null : state.balance.amount ,
    messages: state.balance.fetching ? null : state.messages.items,
    messagesCount: state.balance.fetching ? null : state.messages.count
  }
}

App.propTypes = {
  balance: PropTypes.number,
  messages: PropTypes.array,
  getBalance: PropTypes.func.isRequired,
  getMessages: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  getMessageDetail: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { 
  getBalance, 
  getMessages, 
  sendMessage, 
  getMessageDetail 
})(App);