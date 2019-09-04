import React from 'react';
import './App.css';
import Login from './Components/Login'
import Admin from './Components/Admin.js'
import 'antd/dist/antd.css';

export default class App extends React.Component {
  render() {
    return ( 
      <div className="App">
        <Admin/>
        <Login/>        
      </div>
    );
  }
}