import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Icon } from 'antd';  

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
                        <Menu 
                            onClick={this.handleClick}
                            style={{ width: 256 }}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                        >
                        <SubMenu 
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="appstore" />
                                        <span> Categorias</span>
                                </span>
                            }
                        >
                        <Menu.ItemGroup key="g1" title="Item 1">
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        </Menu.ItemGroup>
                        </SubMenu>
                    </Menu>
                </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <div style={{ background: '#fff', padding: 24, minHeight: 280}}></div>
                    </Content>  
            </Layout>
        )
    }
}
