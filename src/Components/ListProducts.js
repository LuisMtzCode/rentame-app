import React, { Component } from 'react'
import { List } from 'antd';
import { withRouter } from 'react-router-dom';

const { Meta } = List.Item;

export default withRouter(class ListProducts extends Component {
    goToDetails(id){
        this.props.history.push('/pruducts/rent');
    }

    render() {
        return (
            <div>
                <List 
                dataSource={this.props.products}
                renderItem={product => (
                    <List.Item>
                        <Meta 
                        avatar={<img src={product.img} width="100" alt={product.name} onClick={()=>this.goToDetails()}/>}
                        title={product.name}
                        description={product.id}
                        />

                        {/* {product.id} - {product.name} */}
                    </List.Item>
                )}
                />
            </div>
        )
    }
})
