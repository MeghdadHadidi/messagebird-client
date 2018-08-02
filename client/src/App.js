import React from 'react';

// Components
import Header from './components/Header'
import Content from './components/Content'
import Sidebar from './components/Sidebar'

// Styles
import './stylesheets/main.scss'

const App = ({ children }) => (
    <div className="wrapper">
      <Sidebar />
      <div className="content">
        <Header />
        <Content>
          { children }
        </Content>
      </div>
    </div>
);

export default App