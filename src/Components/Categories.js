import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import { Icon } from 'antd';
import { withRouter } from 'react-router-dom'
const { Header } = Layout;
const { SubMenu } = Menu;

export default withRouter(class Categories extends Component {
    constructor(props){
        super(props);
        this.state = {
            categories : [
                {
                    title: 'Inicio',
                    slug: '/',
                    icon: 'home',
                    options: []
                },
                {
                    title: 'Productos',
                    slug: '/products',
                    icon: 'shop',
                    options: []
                },
                {
                    title: 'Mis rentas',
                    slug: '/rents',
                    icon: 'shop',
                    options: []
                },
                {
                    title: 'Categorías',
                    slug: '',
                    icon: 'setting',
                    options: []
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
            ]
        };
    }

    changeRoute(path){
        if(path){
            this.props.history.push(path);
        }
    }

    componentDidUpdate(prevProps) {

        if(prevProps.categories.length !== this.props.categories.length) {
            var categories = [];
            this.props.categories.forEach(category => {
                categories.push({title: category, url: ''});
            });
            let cat = this.state.categories;
            cat[3].options = categories;
            
            this.setState({
                categories: cat
            });
        }
    }

    render() {
        return (
            <Header className="categories">
                <Menu mode="horizontal">
                {this.state.categories.map(category => {
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
