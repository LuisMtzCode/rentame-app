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
    constructor(props) {
        super(props)
        // this.state = {           

        //     fotoUrl: '',
        //     nombreArticulo:'',
        //     descripcion:'',
        //     precio:'',
        //     marca:'',
        //     estatus:'',
        //     disponibilidad:'',

        //  };

        this.products = [
            {
                fotoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnUjIVPhIq-Ux5EfT8Zc2Onp6OhlKz9l0qrvCV-omPn9IpAQDb',
                nombreArticulo: 'máquina podadora para pasto',
                descripcion: 'para pasto exclusivamente. uso domestico, no industrial. Hasta dos horas de trabajo continuo, incluye chicote cortador',
                precio: '100.00',
                marca:'Koblenz',
                estatus:'disponible para renta',
                disponibilidad:'21/09/2019-23/09/2019',
            },
            {
                fotoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2T_k8t2FIVAk-FUoqF6IdIf-RHGY4N-HBU_ktHiW-owUwAC0Qw',
                nombreArticulo: 'aspiradora',
                descripcion: 'aspiradora domestica, incluye filtro, 5 velocidades',
                precio: '99.00',
                marca:'Koblenz',
                estatus:'disponible para renta',
                disponibilidad:'21/09/2019-23/09/2019',
            },
            {
                fotoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4-7l5v6x_REB8uwMZj8n61ij0rlpYzWOyge8a8lXatPSQaNyK',
                nombreArticulo: 'pulidora',
                descripcion: 'pulidora profesional para autos, 5 velocidades. Hasta 5 horas de trabajo continuo',
                precio: '200.00',
                marca:'Black & Decker',
                estatus:'disponible para renta',
                disponibilidad:'21/09/2019-23/09/2019',
            },
            {
                fotoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs3xcohcsyA7cILUpoWXOdMePqc6lF7xvVbSulmMhgeoPHQBAxiA',
                nombreArticulo: 'tarraja',
                descripcion: 'tarraja profesional. Para cobre y galvanizado. 3.5 pulgadas y 5 1/4 pulgadas',
                precio: '500.00',
                marca:'Heavy Duty',
                estatus:'disponible para renta',
                disponibilidad:'21/09/2019-23/09/2019',
            },
            {
                fotoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-OuCMEH6I6lH-gMytDRXDak3H72yUxmTmQKNnSaNAkFRQhXWxPg',
                nombreArticulo: 'máquina para pulir pisos',
                descripcion: 'máquina para pulir pisos. profesional. Para duela, madera, cemento pulido, mosaico, azulejo, marmol. No incluye pulimentos. Incluye utensilios',
                precio: '1000.00',
                marca:'Craftsman',
                estatus:'disponible para renta',
                disponibilidad:'21/09/2019-23/09/2019',
            },
            {
                fotoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-8HEQKYKozakvcdgk-KiEr5LmIziqidMUq6eRQ5K_yQ065U3O3w',
                nombreArticulo: 'máquina para soldar',
                descripcion: 'máquina para soldar. Domestica no profesional. Para hierro, No aluminio. No incluye puntas para soldar. Incluye utensilios',
                precio: '1100.00',
                marca:'Craftsman',
                estatus:'disponible para renta',
                disponibilidad:'21/09/2019-23/09/2019',
            },
            {
                fotoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0eJgO6j8RNSP6KKnsOv44AaAZxjRCucnmrP2SFLoH3OAGE3Nk8Q',
                nombreArticulo: 'set de brochas para pintar',
                descripcion: 'set de brochas para pintar. Profesionales. Para pintura acrilica y a base de agua. No incluye pintura',
                precio: '99.00',
                marca:'Draper Redline',
                estatus:'disponible para renta',
                disponibilidad:'21/09/2019-23/09/2019',
            },
            {
                fotoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoyFn8nQ2MFgLrRVJ9j-uKyfgR4z_pZQYm9bphd-j0l1USdyol',
                nombreArticulo: 'tanque de gas',
                descripcion: 'Tanque de gas de 5 kilogramos. Ideal para puesto de comida en calle. No incluye el llenado. tanque vacio',
                precio: '99.00',
                marca:'Urrea',
                estatus:'disponible para renta ahora',
                disponibilidad:'21/09/2019-23/09/2019',
            },
        ];
    }

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
                        addonBefore="Descripción"
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
                            //onClick={this.toggleDatePicker}                             
                            onClick={this.products}                             
                        >
                        Guardar
                        </Button>
                    </Form.Item>
                
                </Form>               

            </div>
        )
    }

}


