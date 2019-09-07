import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './Components/LandingPage';
import LayoutProducts from './Components/LayoutProducts';
import HeaderApp from './Components/HeaderApp';

const { Content } = Layout;

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Layout className="layout">
          <HeaderApp />
          <Content style={{ background: '#fff' }}>
            <Switch>
              <Route exact path="/" component={LandingPage}></Route>
              <Route path="/products" component={LayoutProducts}></Route>
            </Switch>
          </Content>
        </Layout>
      </div>
    );
  }
}