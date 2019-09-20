import React, { Component } from 'react';
import { Layout, List, Typography, Breadcrumb, Select, Input } from 'antd';

const { Title } = Typography;
const InputGroup = Input.Group;
const { Option } = Select;
const { Sider } = Layout;


export default class SidebarFilters extends Component {
    constructor(props){
        super(props);
        this.state = {
            categories: this.props.categories
        };
        this.data = [
            <div className="filter-item"><Title level={4} disabled>Ordenar</Title>
                <Select name="order" id="order" defaultValue="relevant" onChange={e=>{this.props.handlerFilter(e)}}>
                    <Option value="relevant">Más relevantes</Option>
                    <Option value="low-price">Menor precio</Option>
                    <Option value="hight-price">Mayor precio</Option>
                </Select></div>,
            <div className="filter-item">
                <Title level={4} disabled>Precio</Title>
                <InputGroup compact>
                    <Input style={{ width: '40%', textAlign: 'center' }} id="min" placeholder="Min" onChange={e=>{this.props.handlerFilter(e)}}/>
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
                    <Input style={{ width: '40%', textAlign: 'center', borderLeft: 0 }} id="max" placeholder="Max" onChange={e=>{this.props.handlerFilter(e)}}/>
                </InputGroup>
            </div>,
            <div>
                <Title level={4} disabled>Categorías</Title>
                <ul>
                    {this.state.categories.map((category, i) => {
                        return <li key={i}><Typography.Text>{category}</Typography.Text></li>
                    })}
                </ul>
            </div>,
        ];
    }

    componentDidUpdate(prevProps) {
        if(prevProps.categories.length !== this.props.categories.length) {
            this.setState({
                categories: this.props.categories
            });
        }
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
                    // footer={<div>Footer</div>}
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
