import React, { Component } from 'react';
import axios from 'axios';
import { Layout, List, Typography, Breadcrumb, Select, Input } from 'antd';

const { Title } = Typography;
const InputGroup = Input.Group;
const { Option } = Select;
const { Sider } = Layout;


export default class SidebarFilters extends Component {
    constructor(props){
        super(props);
        this.data = [
            <div className="filter-item"><Title level={4} disabled>Ordenar</Title>
                <Select name="order" id="order" defaultValue="relevant" onChange={this.handleChange}>
                    <Option value="relevant">Más relevantes</Option>
                    <Option value="low-price">Menor precio</Option>
                    <Option value="hight-price">Mayor precio</Option>
                </Select></div>,
            <div className="filter-item">
                <Title level={4} disabled>Precio</Title>
                <InputGroup compact>
                    <Input style={{ width: '40%', textAlign: 'center' }} placeholder="Min" />
                    <Input
                        style={{
                            width: '20%',
                            borderLeft: 0,
                            pointerEvents: 'none',
                            backgroundColor: '#fff',
                        }}
                        placeholder="~"
                        disabled
                    />
                    <Input style={{ width: '40%', textAlign: 'center', borderLeft: 0 }} placeholder="Max" />
                </InputGroup>
            </div>,
            <div>
                <Title level={4} disabled>Categorías</Title>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>,
        ];
    }

    handleChange() {

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
