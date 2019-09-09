import React, { Component } from 'react'
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom'

import ListProducts from './ListProducts';
import AddProduct from './AddProduct';
import SidebarFilters from './SidebarFilters';
import Logo from '../assets/img/bg-header.jpg';

export default class LayoutProducts extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: [
                {
                    id:123,
                    name: 'Product 1',
                    img: Logo
                },
                {
                    id:1234,
                    name: 'Product 2',
                    img: Logo
                },
                {
                    id:12345,
                    name: 'Product 3',
                    img: Logo
                },
            ]
        }
    }

    render() {
        return (
            <div>
                <Layout>
                    <Switch>
                        <Route path="/products/add">
                            <AddProduct/>
                        </Route>
                        <Route path="/products">
                            <SidebarFilters />
                            <Layout style={{ padding: '0 24px 24px', background: '#fff' }}>
                                <ListProducts products={this.state.products} />
                            </Layout>
                        </Route>
                    </Switch>
                </Layout>
            </div>
        )
    }
}
