import React, { Component } from 'react'
import { Layout } from 'antd';

import HeaderApp from './HeaderApp';
import LayoutProducts from './LayoutProducts';
import Banner from './Banner';
import FeaturedProducts from './FeaturedProducts';

const { Content } = Layout;

export default class Admin extends Component {
    render() {
        return (
            <Layout className="layout">
                {/* <HeaderApp />
                <Banner />
                <Content style={{background: '#fff'}}>

                    <FeaturedProducts />
                </Content> */}
                    <LayoutProducts/>
            </Layout>
        )
    }
}
