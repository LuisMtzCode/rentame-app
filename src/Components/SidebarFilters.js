import React, { Component } from 'react';
import axios from 'axios';
import { Layout, List, Typography, Breadcrumb, Select } from 'antd';

const { Option } = Select;
const { Sider } = Layout;


export default class SidebarFilters extends Component {
    componentWillMount() {
        this.data = [
            <Select name="order" id="order" defaultValue="relevant" onChange={this.handleChange}>
                <Option value="relevant">Más relevantes</Option>
                <Option value="low-price">Menor precio</Option>
                <Option value="hight-price">Mayor precio</Option>
            </Select>,
            'Japanese princess to wed commoner.',
            'Australian walks 100km after outback crash.',
            'Man charged over missing wedding girl.',
            'Los Angeles battles huge wildfires.',
        ];
    }

    handleChange(){

    }

    render() {
        return (
            <Sider width={200} className="transparent sideBarFilter">
                <List
                    header={
                     <Breadcrumb>
                        <Breadcrumb.Item>Productos</Breadcrumb.Item>
                     </Breadcrumb>
                    }
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={this.data}
                    renderItem={item => (
                        <List.Item>
                            {item}
                        </List.Item>
                    )}
                />
            </Sider>
        )
    }
}
