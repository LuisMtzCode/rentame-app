import React, { Component } from 'react'
import { Button, Modal, Form, Input } from 'antd';
import axios from 'axios';

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = { 
            visible: false,
            user: '',
            password: ''
         };
    }

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

    handleChange(evt) {
        const value = evt.target.value;
        this.setState({
          ...this.state,
          [evt.target.name]: value
        });
    }

    onSubmit(event){
        event.preventDefault();
        axios.post(process.API_URL + 'login', {
            user: this.state.user,
            password: this.state.password
        }).then(confirmation => {
            console.log(confirmation);
        });
    }

    render() {
        return (
            <div >
                <Button type="link" onClick={this.showModal} >
                    Login
                </Button>
                <Modal
                    title=" Login "
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Form onSubmit={(e) => {this.onSubmit(e)}}>
                        <Form.Item
                        label='Usuario'
                        >
                            <Input name="user" onChange={e=>this.handleChange(e)}/>
                        </Form.Item>
                        <Form.Item
                        label='Contraseña'
                        >
                            <Input.Password name="password" onChange={e=>this.handleChange(e)}/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" shape="round" htmlType="submit">Iniciar sesión</Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        );
    }
}