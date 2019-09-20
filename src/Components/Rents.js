import React, { Component } from 'react'
import { List, Typography } from 'antd';
import axios from 'axios';

export default class Rents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rents: []
        };
        axios.get(`${process.API_URL}rents`)
        .then(rents => {
            console.log(rents.data);
            this.setState({
                rents: rents.data
            });
        })
    }
    render() {
        return (
            <div>
                <List
                    className="list-rents"
                    bordered={true}
                    itemLayout="vertical"
                    dataSource={this.state.rents}
                    renderItem={product => (
                        <List.Item
                            extra={
                                <img
                                    width={200}
                                    alt={product.title}
                                    src={product.img}
                                />
                            }
                        >
                            <Typography.Title level={3}>{product.title}</Typography.Title>
                            <div style={{display:'flex', justifyContent:'center', alignItems:'center', height: '100%', paddingBottom: '30px'}}>
                                <div>
                                    <Typography.Text>Precio por día: {`$${Number(product.price).toLocaleString()}`}</Typography.Text><br/>
                                    <Typography.Text>Fechas de: </Typography.Text>
                                    <Typography.Text strong>{`${product.startDate} ~ ${product.endDate}`}</Typography.Text>

                                    <Typography.Title level={4}>Total: ${Number(product.total).toLocaleString()}</Typography.Title>
                                </div>
                            </div>
                        </List.Item>
                    )}>

                </List>
            </div>
        )
    }
}
