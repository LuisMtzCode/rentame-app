import React, { Component } from 'react';
import { Menu, Layout, Typography } from 'antd';
import { withRouter } from 'react-router-dom'

import Login from './Login';
import Categories from './Categories';
import LogoWhite from '../assets/img/logo-white.png';
const { Header } = Layout;

export default withRouter(class HeaderApp extends Component {
    changeRoute(path){
        this.props.history.push(path);
    }
    
    render() {
        return (
            <div>
                <Header>
                    <Menu className='menu'
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                        
                    >
                        <Menu.Item className="menu-logo" key="1" onClick={()=>this.changeRoute('/')}><img  width="100" src={LogoWhite} alt="Logo"/></Menu.Item>
                        <Menu.Item key="3" onClick={()=>this.changeRoute('/products/add')}><Typography>Renta!</Typography></Menu.Item>
                        <Menu.Item key="2"><Login user={this.props.user}/></Menu.Item>
                    </Menu>
                </Header>
                <Categories/>
            </div>
        )
    }
})
