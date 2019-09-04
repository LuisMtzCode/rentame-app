import React, { Component } from 'react'
//import 'antd/dist/antd.css';
import styles from '../App.css';
import { Form, Input, DatePicker, TimePicker, Select, Cascader, InputNumber, Button } from 'antd';

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};

export default class AddProduct extends Component {

    componentWillMount() {
        this.obj = [
            {
                
            }
        ];
    }

    render() {
        return (
            <div>  

                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNLRFAFPwxrcmp9ecUoR5G-xnezjE2SLZG1rF4iinM5MPONJzb" class="imagen"/> */}

                <p>Ingrese los siguientes datos para dar de alta un artículo:</p>
                {/* <center>This text will be center-aligned.</center> */}

                <Form {...formItemLayout}>
                    <Form.Item
                        label="foto"                        
                        >
                        <Input placeholder="url artículo en renta." id="foto" />
                    </Form.Item>

                    <Form.Item
                        label="artículo"                      
                        >
                        <Input placeholder="nombre del artículo en renta. Ejemplo: Taladro Rotomartillo" id="articulo" />
                    </Form.Item>

                    <Form.Item 
                        label="descripción"                        
                        >
                        <Input placeholder="breve descripción del articulo. Ejemplo: giro izq y der. 5 velocidades" id="descripcion" />
                    </Form.Item>

                    <Form.Item
                        label="precio"                       
                        >
                        <Input placeholder="costo de renta en pesos mexicanos del artículo por día. Ejemplo: $75.00" id="precio" />
                    </Form.Item>

                    <Form.Item
                         label="marca"                        
                         >
                        <Input placeholder="marca del artículo. Ejemplo: craftsman" id="marca" />
                    </Form.Item>                   

                    <Form.Item 
                        label="status"                       
                        >
                        <Input placeholder="status del articulo. Ejemplo: disponible para renta ó actualmente en renta" id="status" />
                        <Select defaultValue="1">
                            <Option value="1">disponible para renta</Option>
                            <Option value="2">actualmente en renta</Option>                            
                        </Select>
                    </Form.Item>                    

                    <Form.Item label="disponibilidad" style={{ marginBottom: 0 }}>
                        <Form.Item                            
                            help="fecha de inicio"
                            style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
                            >
                            <DatePicker />
                        </Form.Item>
                        <span style={{ display: 'inline-block', width: '24px', textAlign: 'center' }}>-</span>
                        <Form.Item
                            help="fecha final"
                            style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
                            >
                            <DatePicker />
                        </Form.Item>
                    </Form.Item>                  

                    <div>
                        <Button 
                            style={{ display: 'inline-block', width: 'calc(50% - 12px)', marginleft: '100px'}}
                            // class="centrado"
                            type="primary"
                            size="small"
                            //  style={{ marginLeft: "100px" }}  
                            onClick={this.toggleDatePicker}                             
                            >
                            ver preliminar
                        </Button>

                        <span style={{ display: 'inline-block', width: '24px', textAlign: 'center' }}>-</span>
                    
                        <Button                         
                            style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
                            // class="centrado"
                            type="primary"
                            size="small"
                            //  style={{ marginLeft: "100px" }}  
                            onClick={this.toggleDatePicker}                             
                            >
                            Guardar
                        </Button>
                    </div>    
                </Form>               

            </div>
        )
    }

}


