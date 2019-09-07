import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import { Icon } from 'antd';
import { withRouter } from 'react-router-dom'
const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

export default withRouter(class Categories extends Component {
    constructor(props){
        super(props)
        this.categories = [
            {
                title: 'Productos',
                slug: '/products',
                icon: 'shop',
                options: []
            },
            {
                title: 'Categorías',
                slug: '',
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
                title: 'Vender',
                slug: '/products/add',
                icon: 'notification',
                options: []
            },
            {
                title: 'Ayuda',
                slug: 'help',
                icon: 'question',
                options: []
            },
        ];
    }

    changeRoute(path){
        if(path){
            this.props.history.push(path);
        }
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
                        onTitleClick={()=> this.changeRoute(category.slug)}
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
})
