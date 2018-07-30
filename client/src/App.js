import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios'

// Actions
import { getBalance } from './actions/balance'

// Components
import MessagesList from './components/MessagesList'
import Balance from './components/Balance';

class App extends Component {
  state = {
    messages: null,
    messagesOffset: 0,
    messagesCount: null,
    balance: null,
    selectedMessage: null,
    loading: false,
    sent: false
  }

  componentDidMount(){
    
  }

  getMessageDetail = (id) => {
    axios.get(`/api/messages/${id}`)
      .then(({ data }) => {
        if(data.success && data.content){
          this.setState({
            selectedMessage: data.content
          })
        }
      })
      .catch(reason => {
        if(reason.content && reason.content.status){
          console.log(reason.content)
        }
      })
  }

  sendMessage = () => {
    axios.post('/api/messages', {
      'originator': 'MessageBird', 
      'recipients': 989126036931, 
      'body': 'This is a test message.'
    })
    .then(({ data }) => {
      if(data.success){
        this.setState({
          sent: true
        })
      }
    })
    .catch(reason => {
      if(reason.content && reason.content.status){
        console.log(reason.content)
      }
    })
  }

  render() {
    const { balance, messages, messagesCount, sent } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Message</h1>
        </header>
        <p className="App-intro">
          <Balance balance={ balance } />
        </p>
        <MessagesList messagesCount={messagesCount} onItemClick={this.getMessageDetail} messages={messages} />

        <button onClick={this.sendMessage}>Send</button>
        { sent && 'Sent' }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  balance: state.balance.amount,
  messages: state.messages.items
})

App.propTypes = {
  balance: PropTypes.number.required,
  messages: PropTypes.array.required
}

export default connect(mapStateToProps, { getBalance })(App);