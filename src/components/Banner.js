import React, { Component } from 'react'
import { Row, Col } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

export default class Banner extends Component {
    render() {
        return (
            <div>
                 <Row>
                    <Col span={24}> <div className='banner'><h1 className='bannerText'>
                        Gana dinero rentando 
                        <br/>lo que no necesitas</h1> </div></Col>
                </Row>
            </div>
        )
    }
}
