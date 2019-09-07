import React, { Component } from 'react'
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom'
import AddProduct from './AddProduct';

import SidebarFilters from './SidebarFilters';

export default class LayoutProducts extends Component {
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
                                
                            </Layout>
                        </Route>
                    </Switch>
                </Layout>
            </div>
        )
    }
}
