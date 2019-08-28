import React from 'react';
import logo from './logo.svg';
import './App.css';
import Categorys from './Components/Categorys';
import Login from './Components/Login'
import Admin from './Components/Admin.js'
import 'antd/dist/antd.css';

export default class App extends React.Component {
  render() {
    return ( 
      <div className="App">
        <Admin/>
        <Login/>
        <Categorys/> 
      </div>
    );
  }
}