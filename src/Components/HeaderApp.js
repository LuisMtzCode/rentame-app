import React, { Component } from 'react';
import { Menu, Layout, Typography } from 'antd';
import { withRouter } from 'react-router-dom'

import Login from './Login';
import Categories from './Categories';
import LogoWhite from '../assets/img/logo-white.png';

const { Header } = Layout;

export default withRouter(class HeaderApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalVisible : false,
            categories: this.props.categories
        }
    }
    changeRoute(path){
        this.props.history.push(path);
    }
    componentDidUpdate(prevProps) {
        if(prevProps.categories.length !== this.props.categories.length) {
            this.setState({
                categories: this.props.categories
            });
        }
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
                        {
                            !this.props.isLogged ?
                            <Menu.Item key="2"><Login modalVisible={this.state.modalVisible} handlerUser={this.props.handlerUser}/></Menu.Item>
                        : [
                            <Menu.Item key="3" onClick={()=>{this.changeRoute('/products/add')}}><Typography>Renta!</Typography></Menu.Item> ,
                            <Menu.Item key="2">{`${this.props.firstName} ${this.props.lastName}`} <img width="30" src={`https://ui-avatars.com/api/?name=${this.props.firstName}+${this.props.lastName}&rounded=true`} alt="avatar" /></Menu.Item>
                        ]}
                    </Menu>
                </Header>
                <Categories categories={this.state.categories}/>
            </div>
        )
    }
})
