import React from 'react';

// Components
import Header from './components/Header'
import Sidebar from './components/Sidebar'

// Styles
import './styles/App.scss'

const App = ({ children }) => (
    <div className="container">
      <Header />
      <Sidebar />
      <div className="content">
        { children }
      </div>
    </div>
);

export default App