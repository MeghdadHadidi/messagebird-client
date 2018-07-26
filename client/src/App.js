import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  state = {
    messages: null,
    messagesOffset: 0,
    messagesCount: null,
    balance: null,
    selectedMessage: null,
    loading: false
  }

  componentDidMount(){
    this.setState({
      loading: true
    });

    axios.get('/api/balance')
      .then(({ data }) => {
        if(data.success && data.content.amount){
          this.setState({
            loading: false,
            balance: data.content.amount
          })
        }
      })

    
    axios.get('/api/messages')
      .then(({ data }) => {
        this.setState({
          messagesCount: data.content.totalCount,
          messagesOffset: data.content.offset,
          messages: data.content.items
        })
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

  getMessagesList = () => {
    let messageList = <h5>Loading messages...</h5>;
    const { messages } = this.state;
    if(messages !== null){
      messageList = 
        <ul>
          {messages.map((message, key) => <li onClick={() => this.getMessageDetail(message.id)} key={key}>From: {message.originator} Body: {message.body}</li>)} 
        </ul>
    }
    
    return messageList;
  }

  sendMessage = () => {
    axios.post('/api/messages', {})
      .then(({ data }) => {
        console.log(data)
      })
  }

  render() {
    const { balance, loading, messagesCount } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Message</h1>
        </header>
        <p className="App-intro">
          { loading && 'Loading balance ...' }
          { balance !== null && `Your balance is ${balance} ` }
        </p>
        <h2>Messages: (Total: {messagesCount !== null ? messagesCount : '...'})</h2>
        {this.getMessagesList()}

        <button onClick={this.sendMessage}>Send</button>
      </div>
    );
  }
}

export default App;