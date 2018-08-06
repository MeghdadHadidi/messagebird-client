import React, { Component } from 'react'
import { TiMessageTyping, TiHome, TiContacts } from 'react-icons/ti'

// Images
import logo from '../images/logo-small-bw.png'

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
          <NavItem title="Cartables" activeClassName="active open" to="/messages" render={() => {
            return(
              <ul>              
                <NavItem exact activeClassName="active" to="/messages">
                  <span>Inbox</span>
                </NavItem>              
                <NavItem activeClassName="active" to="/messages/send">
                  <span>Related</span>
                </NavItem>
              </ul>
            )
          }}>
            <TiMessageTyping size="1.3em" className="menu-item-icon" />
            <span>Cartables</span>
          </NavItem>
        </ul>
      </nav>
    )
  }
}

export default Sidebar