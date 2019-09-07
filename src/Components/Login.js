import React, { Component } from 'react'
import { Button, Modal, Form, Input, Typography } from 'antd';
import LogoWhite from '../assets/img/logo-white.png';
import axios from 'axios';

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = { 
            visible: false,
            loading: false,
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
            loading: true,
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
                    <Typography>Login</Typography>
                </Button>
                <Modal
                    width="40%"
                    className="modal-login"
                    title={<img src={LogoWhite} width="150" alt="Logo" />}
                    visible={this.state.visible}
                    okText="Iniciar sesión"
                    onOk={this.handleOk}
                    cancelText="Cancelar"
                    onCancel={this.handleCancel}
                    confirmLoading={this.state.loading}
                >
                    <Typography.Title level={4}>Inicio de sesión</Typography.Title>
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
                        {/* <Form.Item>
                            <Button type="primary" shape="round" htmlType="submit">Iniciar sesión</Button>
                        </Form.Item> */}
                    </Form>
                </Modal>
            </div>
        );
    }
}