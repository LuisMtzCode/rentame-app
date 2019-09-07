import React, { Component } from 'react'
import { Layout } from 'antd';

import SidebarFilters from './SidebarFilters';

export default class LayoutProducts extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <SidebarFilters />
                    <Layout style={{ padding: '0 24px 24px', background: '#fff' }}>
                        
                    </Layout>
                </Layout>
            </div>
        )
    }
}
