import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

// Components
import Header from './components/Header'
import Content from './components/Content'
import Sidebar from './components/Sidebar'

// Styles
import './stylesheets/main.scss'

class App extends PureComponent {
  render(){
    const { currentPage, children } = this.props;
    return(
      <div className="wrapper">
        <Sidebar />
        <div className="content">
          <Header currentPage={currentPage} />
          <Content currentPage={currentPage}>
            { children }
          </Content>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  currentPage: PropTypes.object,
}

function mapStateToProps(state){
  return {
    currentPage: state.pages.current
  }
}

export default withRouter(connect(mapStateToProps, {})(App))