import React, { Component } from 'react'
//import 'antd/dist/antd.css';
import styles from '../App.css';
import { Form, Input, DatePicker, TimePicker, Select, Cascader, InputNumber, Button } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

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

    state = {
        value: '',
      };

      onChange = ({ target: { value } }) => {
        this.setState({ value });
      };

    render() {

        const { value } = this.state;

        return (
            <div>  

                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNLRFAFPwxrcmp9ecUoR5G-xnezjE2SLZG1rF4iinM5MPONJzb" class="imagen"/> */}

                
                    <p>Ingrese los siguientes datos para dar de alta un artículo:</p>
                    
               
                {/* <center>This text will be center-aligned.</center> */}

                <Form {...formItemLayout}>
                    <div style={{ margin: '12px 0' }} />
                    <Form.Item
                        label="Ingrese los siguientes datos para dar de alta un artículo"                        
                    >                        
                    </Form.Item>

                    <Form.Item
                        label="Foto"                        
                        >
                        <Input placeholder="Url artículo en renta." id="Foto" />
                    </Form.Item>

                    <Form.Item
                        label="Artículo"                      
                        >
                        <Input placeholder="Nombre del artículo en renta. Ejemplo: Taladro Rotomartillo" id="Articulo" />
                    </Form.Item>

                    {/* <Form.Item 
                        label="Descripción"                        
                        >
                        <Input placeholder="Breve descripción del articulo. Ejemplo: giro izq y der. 5 velocidades" id="Descripcion" />
                    </Form.Item> */}

                   
                    <Form.Item 
                        label="Descripción"                        
                        > 
                    <div style={{ margin: '12px 0' }} />
                    <TextArea
                        value={value}
                        onChange={this.onChange}
                        placeholder="Breve descripción del articulo. Ejemplo: giro izq y der. 5 velocidades" id="Descripcion"
                        autosize={{ minRows: 3, maxRows: 5 }}
                    />
                    </Form.Item>

                    <Form.Item
                        label="Precio"                       
                        >
                        <Input placeholder="Costo de renta en pesos mexicanos del artículo por día. Ejemplo: $75.00" id="Precio" />
                    </Form.Item>

                    <Form.Item
                         label="Marca"                        
                         >
                        <Input placeholder="Marca del artículo. Ejemplo: craftsman" id="Marca" />
                    </Form.Item>                   

                    <Form.Item 
                        label="Estatus"                       
                        >
                        {/* <Input placeholder="Estatus del articulo. Ejemplo: disponible para renta ó actualmente en renta" id="Estatus" /> */}
                        
                        
                        <Select defaultValue="">
                            <Option value="">Seleccionar estatus</Option>                            
                            <Option value="1">Disponible para renta</Option>
                            <Option value="2">Actualmente en renta</Option>       
                        </Select>
                    </Form.Item>                    

                    <Form.Item label="Disponibilidad" style={{ marginBottom: 0 }}>
                        <Form.Item                            
                            help="Fecha de inicio"
                            style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
                            >
                            <DatePicker />
                        </Form.Item>
                        <span style={{ display: 'inline-block', width: '24px', textAlign: 'center' }}>-</span>
                        <Form.Item
                            help="Fecha final"
                            style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
                            >
                            <DatePicker />
                        </Form.Item>
                    </Form.Item>  

                    <Form.Item>                   
                        <Button 
                            style={{ display: 'inline-block', width: 'calc(50% - 12px)', marginleft: '100px'}}
                            // class="centrado"
                            type="primary"
                            size="small"
                            //  style={{ marginLeft: "100px" }}  
                            onClick={this.toggleDatePicker}                             
                            >
                            Ver preliminar
                        </Button>
                    </Form.Item>

                    <Form.Item>
                        {/* <span style={{ display: 'inline-block', width: '24px', textAlign: 'center' }}>-</span> */}
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
                    </Form.Item>
                
                </Form>               

            </div>
        )
    }

}


