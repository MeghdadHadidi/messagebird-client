import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { TiMessageTyping, TiHome, TiContacts } from 'react-icons/ti'

// Images
import logo from '../images/logo-icon-white.svg'

class Sidebar extends Component {
  render() {
    return (
      <nav className="left-sidebar">
        <div className="toggler"></div>
        <a className="brand">
            <img alt="Message Bird" src={ logo } />
        </a>
        <ul className="products">
          <li title="Dashboard">
            <Link to="/">
              <TiHome size="1.3em" className="menu-item-icon" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li title="Contacts">
            <Link to="/contacts">
              <TiContacts size="1.3em" className="menu-item-icon" />
              <span>Contacts</span>
            </Link>
          </li>
          <li title="SMS">
            <a href="/messages">
              <TiMessageTyping size="1.3em" className="menu-item-icon" />
              <span>SMS</span>
            </a>
            <ul>
              <li>
                <Link to="/messages">
                  <span>Message List</span>
                </Link>
              </li>
              <li>
                <Link to="/send">
                  <span>Quick Send</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Sidebar