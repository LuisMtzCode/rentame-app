import React, { Component } from 'react';
import axios from 'axios';
import { Layout, List, Typography } from 'antd';

const { Sider } = Layout;


export default class SidebarFilters extends Component {
    componentWillMount() {
        this.data = [
            <h1>Racing car sprays burning fuel into crowd.</h1>,
            'Japanese princess to wed commoner.',
            'Australian walks 100km after outback crash.',
            'Man charged over missing wedding girl.',
            'Los Angeles battles huge wildfires.',
        ];
    }

    render() {
        return (
            <Sider width={200} className="transparent sideBarFilter">
                <List
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={this.data}
                    renderItem={item => (
                        <List.Item>
                            <Typography.Text mark>[ITEM]</Typography.Text> {item}
                        </List.Item>
                    )}
                />
            </Sider>
        )
    }
}
