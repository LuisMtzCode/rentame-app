import React from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';


export default class App extends React.Component {
  render() {
      return (
          <div className = "App">
              <Banner/>
          </div>
      );
  }
}