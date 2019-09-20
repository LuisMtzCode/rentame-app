import React, { Component } from 'react'
import { List, Typography, Icon, Button, Row, Col} from 'antd';
import { withRouter } from 'react-router-dom';

export default withRouter(class ListProducts extends Component {
    goToDetails(id){
        this.props.history.push('products/rent/'+ id);
    }
    renderStars = (stars) => {
        let starsD = [];
        for (let i = 0; i < Number(stars); i++) {
            starsD.push(<Icon key={i} type="star" theme='twoTone' twoToneColor='#EED555' />);
        }
        return starsD;
    }

    render() {
        return (
            <React.Fragment>
                <List
                className="list-products" 
                itemLayout="vertical"
                size="large"
                dataSource={this.props.products}
                loading={this.props.loading}
                renderItem={product => (
                    <List.Item
                    extra={
                        <img
                          width={200}
                          alt={product.title}
                          src={product.img}
                        />
                    }>
                        <Row>
                            <Col xs={24} md={12} lg={12} xl={12}>
                                <Typography.Title level={3}>{product.title}</Typography.Title>
                                <Typography className="Text">{product.description}</Typography>
                                <Typography.Title level={4}>{`$${product.price}`} / día</Typography.Title>
                            </Col>
                            <Col xs={24} md={12} lg={12} xl={12}>
                                <div className="item-right">
                                    <div className="stars-container">{this.renderStars(product.stars)}</div>
                                    <Button type="primary" shape="round" size="large" onClick={()=>{this.goToDetails(product.productId)}}>
                                        Rentar
                                        <Icon type="arrow-right" />
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </List.Item>
                )}
                />
            </React.Fragment>
        )
    }
})
