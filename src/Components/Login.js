import React, { Component } from 'react'
import { Button } from 'antd';
import { Modal } from 'antd';


export default class login extends Component {
    state = { visible: false };

    showModal = () => {
        this.setState({
        visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
        visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
        visible: false,
        });
    };

    render() {
        return (
            <div >
                <Button type="primary" onClick={this.showModal} >
                    Login
                </Button>
                <Modal
                    title=" Login "
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                </Modal>
            </div>
        );
    }
    }


