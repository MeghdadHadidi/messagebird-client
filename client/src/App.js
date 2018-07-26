import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  state = {
    balance: null,
    loading: false
  }

  componentDidMount(){
    this.setState({
      loading: true
    });

    const axiosInstance = axios.create({
      baseURL: 'https://rest.messagebird.com'
    })

    axiosInstance.defaults.headers.common['Authorization'] = 'AccessKey mAZ4WdLQeoAWrRrWoLkAZSRvu'
    axiosInstance.defaults.headers.common['Accept'] = 'application/json'

    axiosInstance.get('/balance')
      .then((data) => {
        debugger;
        console.log(data);
        if(data.success){
          this.setState({
            balance: data.balance
          })
        }
      })
  }

  render() {
    const { balance, loading } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Message</h1>
        </header>
        <p className="App-intro">
          { loading && 'Loading balance ...' }
          { balance !== null && `Your balance is ${balance} ` }
        </p>
      </div>
    );
  }
}

export default App;