import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import LandingPage from './Components/LandingPage';
import LayoutProducts from './Components/LayoutProducts';
import HeaderApp from './Components/HeaderApp';
import Rents from './Components/Rents';

const { Content } = Layout;

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLogged: false,
      firstName: '',
      lastName: '',
      categories: [],
    };

    axios.get(`${process.API_URL}products/categories`)
    .then(categories => {
        console.log(categories.data);
        this.setState({
            categories: categories.data
        })
    });

    this.handlerUser = this.handlerUser.bind(this);
  }

  handlerUser(user){
    this.setState({...user, isLogged: true});
  }
  
  render() {
    return (
      <div className="App">
        <Layout className="layout">
          <HeaderApp firstName={ this.state.firstName }
           lastName={ this.state.lastName } 
           isLogged={this.state.isLogged} 
           handlerUser={this.handlerUser}
           categories={this.state.categories} />
          <Content style={{ background: '#fff' }}>
            <Switch>
              <Route exact path="/" component={LandingPage}></Route>
              <Route path="/products" component={() => <LayoutProducts categories={this.state.categories}/> }></Route>
              <Route path="/rents" component={Rents}></Route>
            </Switch>
          </Content>
        </Layout>
      </div>
    );
  }
}