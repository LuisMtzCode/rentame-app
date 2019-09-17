import React, { Component } from 'react'
import { Button, Modal, Form, Input, Typography, Icon } from 'antd';
import LogoWhite from '../assets/img/logo-white.png';
import axios from 'axios';

export default class Login extends Component {
    constructor(props){
        super(props);
        console.log(this.props)
        this.state = {
            visible: false,
            loading: false,
            userName: '',
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
        this.onSubmit();
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

    onSubmit(){
        axios.post(process.API_URL + 'login', {
            userName: this.state.user,
            password: this.state.password
        })
        .then(confirmation => {
            this.setState({
                loading: false,
                visible: false
            });
            this.props.user = confirmation;
            console.log('confirmation', this.props.user);
        });
    }

    render() {
        return (
            <div >
                <Button type="link" onClick={this.showModal} >
                    <Typography>Login</Typography>
                </Button>
                <Modal
                    className="modal-login"
                    title={<img src={LogoWhite} alt="Logo" />}
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
                            <Input 
                            name="user" 
                            onChange={e=>this.handleChange(e)} 
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}/>
                        </Form.Item>
                        <Form.Item
                        label='Contraseña'
                        >
                            <Input.Password
                            name="password"
                            onChange={e=>this.handleChange(e)}
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}/>
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