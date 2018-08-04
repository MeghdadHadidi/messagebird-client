import React, { Component } from 'react'
import { TiMessageTyping, TiHome, TiContacts } from 'react-icons/ti'

// Images
import logo from '../images/logo-icon-white.svg'

// Components
import NavItem from './helpers/NavItem'

class Sidebar extends Component {
  render() {
    return (
      <nav className="left-sidebar">
        <div className="toggler"></div>
        <a className="brand">
            <img alt="Message Bird" src={ logo } />
        </a>
        <ul className="products">          
          <NavItem title="Dashboard" to="/" exact activeClassName="active">
            <TiHome size="1.3em" className="menu-item-icon" />
            <span>Dashboard</span>
          </NavItem>          
          <NavItem title="Contacts" to="/contacts">
            <TiContacts size="1.3em" className="menu-item-icon" />
            <span>Contacts</span>
          </NavItem>          
          <NavItem title="SMS" activeClassName="active" to="/messages" render={() => {
            return(
              <ul>              
                <NavItem activeClassName="active" to="/messages">
                  <span>Message List</span>
                </NavItem>              
                <NavItem activeClassName="active" to="/send">
                  <span>Quick Send</span>
                </NavItem>
              </ul>
            )
          }}>
            <TiMessageTyping size="1.3em" className="menu-item-icon" />
            <span>SMS</span>
          </NavItem>
        </ul>
      </nav>
    )
  }
}

export default Sidebar