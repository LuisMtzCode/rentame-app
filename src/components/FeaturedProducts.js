import React, { Component } from 'react'
import { Row, Col, Card, Button } from 'antd';
const { Meta } = Card;

export default class FeaturedProducts extends Component {
    constructor(props){
        super(props);
        this.obj = [
            {
                title: 'Product 1',
                description: 'This is the description',
                img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=843&q=80',
                img_alt: 'Product 1',
                product: 1
            },
            {
                title: 'Product 2',
                description: 'This is the description',
                img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                img_alt: 'Product 2',
                product: 2
            },
            {
                title: 'Product 3',
                description: 'This is the description',
                img: 'https://images.unsplash.com/photo-1546938576-04917ec516ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
                img_alt: 'Product 3',
                product: 3
            },
            {
                title: 'Product 4',
                description: 'This is the description',
                img: 'https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80',
                img_alt: 'Product 4',
                product: 4
            }
        ];
    }

    render() {
        return (
            <div className="featuredProducts">
                <Row gutter={16}>
                    {this.obj.map((product, i) => {
                        return (
                            <Col xs={24} sm={12} md={6} lg={6} key={i}>
                                <Card bordered={false} cover={<img src={product.img} alt={product.img_alt} />}
                                    actions={[
                                        <Button className="btn-rent" type="primary" block>
                                            Rentar
                                        </Button>
                                    ]}
                                >
                                    <Meta
                                        title={product.title}
                                        description={product.description}
                                    />
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        )
    }
}
