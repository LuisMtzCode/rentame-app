import React, { Component } from 'react';
import { Menu, Layout } from 'antd';

import Login from './Login';
import Categories from "./Categories";
const { Header } = Layout;

export default class HeaderApp extends Component {
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
                        <Menu.Item key="2"><Login/></Menu.Item>
                        <Menu.Item key="3">RENTAME YA!</Menu.Item>
                    </Menu>
                </Header>
                <Categories/>
            </div>
        )
    }
}
