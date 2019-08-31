import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import { Icon } from 'antd';
const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

export default class Categories extends Component {
    componentWillMount(){
        this.categories = [
            {
                title: 'Productos',
                slug: 'Products',
                icon: 'setting',
                options: [
                    {
                        title: 'Option 1',
                        url: '',
                    },
                    {
                        title: 'Option 2',
                        url: '',
                    }
                ]
            },
            {
                title: 'Categorías',
                slug: 'categories',
                icon: 'setting',
                options: [
                    {
                        title: 'Option 1',
                        url: '',
                    },
                    {
                        title: 'Option 2',
                        url: '',
                    }
                ]
            },
        ];
    }
    render() {
        return (
            <Header className="categories">
                <Menu mode="horizontal">
                {this.categories.map(category => {
                    return <SubMenu
                        title={
                            <span>
                                <Icon type={category.icon} />
                                {category.title}
                            </span>
                        }
                        key={`menu-${category.slug}`}
                    >
                        {category.options.map((option, i_option) => {
                            return <Menu.Item key={`${category.slug}-option-${i_option}`}>{option.title}</Menu.Item>
                        })}
                    </SubMenu>
                })}
                </Menu>
            </Header>
        )
    }
}
