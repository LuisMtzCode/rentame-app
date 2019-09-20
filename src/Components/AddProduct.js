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
                fotoUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fbaper.net%2Fwp-content%2Fuploads%2F2017%2F08%2FHRR216VKA.jpg&imgrefurl=https%3A%2F%2Fbaper.net%2Fproducto%2Fmaquina-de-cortar-pasto-honda-hrr216-vka%2F&docid=nRB2_BuVYN2RpM&tbnid=O73lIMOQte-p4M%3A&vet=10ahUKEwiG8ZPSzd_kAhVJcq0KHWuYBCMQMwj1ASgDMAM..i&w=1500&h=1500&bih=722&biw=1536&q=maquina%20podadora%20de%20pasto&ved=0ahUKEwiG8ZPSzd_kAhVJcq0KHWuYBCMQMwj1ASgDMAM&iact=mrc&uact=8',
                nombreArticulo: 'máquina podadora para pasto',
                descripcion: 'para pasto exclusivamente. uso domestico, no industrial. Hasta dos horas de trabajo continuo, incluye chicote cortador',
                precio: '100.00',
                marca:'Koblenz',
                estatus:'disponible para renta',
                disponibilidad:'21/09/2019-23/09/2019',
            },
            {
                fotoUrl: 'https://www.google.com/search?rlz=1C1CHBF_esMX842MX842&tbm=isch&sxsrf=ACYBGNToYTIbfJ6GaDQv6_-lq3LrZtK09g%3A1568989574929&sa=1&ei=huGEXYaWOMnktQXrsJKYAg&q=aspiradora&oq=aspiradora&gs_l=img.3..35i39j0l9.2806313.2807382..2807495...0.0..0.154.928.5j4......0....1..gws-wiz-img.OhOXvqVGACI&ved=0ahUKEwiG8ZPSzd_kAhVJcq0KHWuYBCMQ4dUDCAc&uact=5#',
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
                fotoUrl: 'https://www.google.com/search?q=tarraja&rlz=1C1CHBF_esMX842MX842&sxsrf=ACYBGNT3acE_lUrFQcuTIJLrAYXFaTBGUw:1568992421254&source=lnms&tbm=isch&sa=X&ved=0ahUKEwii87Gf2N_kAhVHQq0KHRUTBq0Q_AUIEigB&biw=1536&bih=722#',
                nombreArticulo: 'tarraja',
                descripcion: 'tarraja profesional. Para cobre y galvanizado. 3.5 pulgadas y 5 1/4 pulgadas',
                precio: '500.00',
                marca:'Heavy Duty',
                estatus:'disponible para renta',
                disponibilidad:'21/09/2019-23/09/2019',
            },
            {
                fotoUrl: 'https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.sistemasdelimpieza.com%2F%2Fwp-content%2Fuploads%2Fedge-01.jpg&imgrefurl=http%3A%2F%2Fwww.sistemasdelimpieza.com%2Fproductos%2Fpulido-de-pisos%2F&docid=QWGuLNX5eBpDrM&tbnid=dZPaskiNGQz_oM%3A&vet=10ahUKEwiXruW42N_kAhWBsZ4KHX1_CdUQMwj1ASgeMB4..i&w=400&h=300&bih=722&biw=1536&q=maquina%20para%20pulir%20pisos&ved=0ahUKEwiXruW42N_kAhWBsZ4KHX1_CdUQMwj1ASgeMB4&iact=mrc&uact=8',
                nombreArticulo: 'máquina para pulir pisos',
                descripcion: 'máquina para pulir pisos. profesional. Para duela, madera, cemento pulido, mosaico, azulejo, marmol. No incluye pulimentos. Incluye utensilios',
                precio: '1000.00',
                marca:'Craftsman',
                estatus:'disponible para renta',
                disponibilidad:'21/09/2019-23/09/2019',
            },
            {
                fotoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGXM-_ohtBPEY8Ov2zSFko-W_XQ5IDWDb93z_6B3dY9lxaQ27',
                nombreArticulo: 'máquina para soldar',
                descripcion: 'máquina para soldar. Domestica no profesional. Para hierro, No aluminio. No incluye puntas para soldar. Incluye utensilios',
                precio: '1100.00',
                marca:'Craftsman',
                estatus:'disponible para renta',
                disponibilidad:'21/09/2019-23/09/2019',
            },
            {
                fotoUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F71ZDCpLhe5L._SX466_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.es%2FDraper-Redline-78633-brochas-pintar%2Fdp%2FB01140X560&docid=b1nubxgnU4XLlM&tbnid=9pUt5kszOY-ozM%3A&vet=10ahUKEwiZsbOA1N_kAhUOv54KHSvcAekQMwiaASgTMBM..i&w=466&h=184&bih=722&biw=1536&q=set%20de%20brochas%20para%20pintar&ved=0ahUKEwiZsbOA1N_kAhUOv54KHSvcAekQMwiaASgTMBM&iact=mrc&uact=8',
                nombreArticulo: 'set de brochas para pintar',
                descripcion: 'set de brochas para pintar. Profesionales. Para pintura acrilica y a base de agua. No incluye pintura',
                precio: '99.00',
                marca:'Draper Redline',
                estatus:'disponible para renta',
                disponibilidad:'21/09/2019-23/09/2019',
            },
            {
                fotoUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn1.coppel.com%2Fimages%2Fcatalog%2Fpm%2F6480353-1.jpg&imgrefurl=https%3A%2F%2Fwww.coppel.com%2Fcilindro-para-gas-gruts-9-kg-pm-6480353&docid=PcluBrCAyRIrXM&tbnid=VeWRpT2mXISkYM%3A&vet=10ahUKEwiT9vaT1d_kAhWJhJ4KHWXFAf4QMwiEASgNMA0..i&w=800&h=640&bih=722&biw=1536&q=tanque%20de%20gas%20de%205%20kg&ved=0ahUKEwiT9vaT1d_kAhWJhJ4KHWXFAf4QMwiEASgNMA0&iact=mrc&uact=8',
                nombreArticulo: 'tanque de gas',
                descripcion: 'Tanque de gas de 5 kilogramos. Ideal para puesto de comida en calle. No incluye el llenado. tanque vacio',
                precio: '99.00',
                marca:'Urrea',
                estatus:'disponible para renta',
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


