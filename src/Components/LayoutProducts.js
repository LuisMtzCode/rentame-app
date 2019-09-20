import React, { Component } from 'react'
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom'
import axios from 'axios';

import ListProducts from './ListProducts';
import DetailProduct from './DetailProduct';
import AddProduct from './AddProduct';
import SidebarFilters from './SidebarFilters';

export default class LayoutProducts extends Component {
    constructor(props){
        super(props);

        axios.get(process.API_URL + 'products')
        .then(products => {
            this.setState({products: products.data, loading: false});
        });

        this.state = {
            loading: true,
            categories: this.props.categories
        };
    }
    handlerFilter(evt){
        console.log(evt.target);
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
            <React.Fragment>
                <Layout>
                    <Switch>
                        <Route path="/products/add">
                            <AddProduct/>
                        </Route>
                        <Route path="/products/rent/:id" component={DetailProduct}></Route>
                        <Route path="/products">
                            <SidebarFilters categories={this.state.categories} handlerFilter={this.handlerFilter}/>
                            <Layout style={{ padding: '0 24px 24px', background: '#fff' }}>
                                <ListProducts loading={this.state.loading} products={this.state.products} />
                            </Layout>
                        </Route>
                    </Switch>
                </Layout>
            </React.Fragment>
        )
    }
}
