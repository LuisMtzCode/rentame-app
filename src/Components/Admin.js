import React, { Component } from 'react'
import { Layout, Menu } from 'antd';

import Categories from "./Categories";
import Banner from './Banner';
import FeaturedProducts from './FeaturedProducts';
import AddProduct from './AddProduct';

const { Header, Content } = Layout;

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
                        {/* <Menu.Item key="1">agregar articulo</Menu.Item> */}
                        <Menu.Item key="2">Login</Menu.Item>
                        <Menu.Item key="3">RENTAME YA!</Menu.Item>
                        
                    </Menu>
                </Header>
                <Categories/>
                <Banner />
                <Content style={{background: '#fff'}}>
                    {/* <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>

                    </div> */}
                    <FeaturedProducts />
                    <AddProduct/>
                </Content>
            </Layout>
        )
    }
}
