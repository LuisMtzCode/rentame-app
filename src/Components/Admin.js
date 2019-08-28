import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Icon } from 'antd';

import Banner from './Banner';
import FeaturedProducts from './FeaturedProducts';

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

export default class Admin extends Component {
    render() {
        return (
            <Layout className="layout">
                <Header>
                    <Menu className='menu'
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="2">Login</Menu.Item>
                        <Menu.Item key="3">RENTAME YA!</Menu.Item>
                    </Menu>
                </Header>
                <Header  className="categories">
                <Menu mode="horizontal">
                        <SubMenu
                            title={
                                <span>
                                    <Icon type="setting" />
                                    Categorías
                                </span>
                            }
                        >
                            <Menu.Item key="setting:1">Option 1</Menu.Item>
                            <Menu.Item key="setting:2">Option 2</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Header>
                <Banner />
                <Content style={{background: '#fff'}}>
                    {/* <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>

                    </div> */}
                    <FeaturedProducts />
                </Content>
            </Layout>
        )
    }
}
