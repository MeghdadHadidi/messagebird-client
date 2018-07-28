import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'

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
    this.setState({
      loading: true
    });

    axios.get('/api/messages')
      .then(({ data }) => {
          this.setState({
              messagesCount: data.content.totalCount,
              messagesOffset: data.content.offset,
              messages: data.content.items
          })
      })

    axios.get('/api/balance')
      .then(({ data }) => {
        if(data.success && data.content.amount){
          this.setState({
            loading: false,
            balance: data.content.amount
          })
        }
      })
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
  }

  render() {
    const { balance, messages, messagesCount, sent } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Message</h1>
        </header>
        <p className="App-intro">
          <Balance balance={balance} />
        </p>
        <MessagesList messagesCount={messagesCount} onItemClick={this.getMessageDetail} messages={messages} />

        <button onClick={this.sendMessage}>Send</button>
        { sent && 'Sent' }
      </div>
    );
  }
}

export default connect(null, {})(App);