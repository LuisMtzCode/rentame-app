import React, { Component } from 'react'
import { Layout, Icon, Typography, DatePicker, Form , Button, Modal} from 'antd';
import axios from 'axios';
import swal from 'sweetalert';

const { RangePicker } = DatePicker;
const { Sider } = Layout;
const { confirm } = Modal;

export default class DetailProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            loding: true,
            days: 0, 
            total: 0,
            loading_date: false,
            icon_validation: '',
            button_disabled: true,
            price: ''
        }
        const id_product = this.props.match.params.id;
        if(this.props.match.params.id){
            axios.get(`${process.API_URL}products/${id_product}`).then(data => {
                const product = data.data;
                this.setState({
                    loading: false,
                    ...product,
                });
            });
        }
    }
    
    renderStars = (stars) => {
        let starsD = [];
        for (let i = 0; i < Number(stars); i++) {
            starsD.push(<Icon key={i} type="star" theme='twoTone' twoToneColor='#EED555' />);
        }
        return starsD;
    }

    handlerChangeDate(dates){
        if(dates && dates.length === 2){
            this.setState({
                startDate: dates[0],
                endDate: dates[1],
                loading_date: true
            }, () => {
                setTimeout(() => {
                    this.setState({
                        icon_validation: <Icon type="check"  style={{color: '#66bb6a'}}/>,
                        loading_date: false,
                        button_disabled: false,
                    })
                }, 1500);
                this.calculateTotal()
            })
        }
    }
    calculateTotal(){
        if(this.state.startDate && this.state.endDate){
            let days = this.state.startDate.diff(this.state.endDate, 'days') * -1;
            let total = this.state.price * days;
            this.setState({
                days, total,
            });
        }

    }

    rentProduct(){
        const data = {
            img: this.state.img,
            title: this.state.title,
            description: this.state.description,
            price: this.state.price,
            total: this.state.total,
            days: this.state.days,
            startDate: this.state.startDate.format('YYYY-MM-DD'),
            endDate: this.state.endDate.format('YYYY-MM-DD')
        };
        confirm({
            title: 'Confirmación de renta',
            content: 
            <div>
                <Typography.Title level={3}>{this.state.title} </Typography.Title>
                <Typography.Text>Fechas: { `${this.state.startDate.format('YYYY-MM-DD')} ~ ${this.state.endDate.format('YYYY-MM-DD')}`}</Typography.Text><br/>
                <Typography.Text>Días: { this.state.days }</Typography.Text><br/>
                <Typography.Text strong>Precio por día: ${Number(this.state.price).toLocaleString(navigator.language, { minimumFractionDigits: 2 })}</Typography.Text><br/>
                <hr style={{opacity: '0.3'}}/>
                <Typography.Title level={4}>Total: ${Number(this.state.total).toLocaleString(navigator.language,{ minimumFractionDigits: 2 })}</Typography.Title>
            </div>,
            onOk() {
              return axios.post(`${process.API_URL}products/rent/add`, data)
              .then(() => {
                  swal('Producto rentado con éxito','', 'success');
              }).catch(() => console.log('Oops errors!'));
            },
            onCancel() {},
        });
    }

    render() {
        return (
            <React.Fragment>
                {
                this.state.loading ? 
                (<Icon type="loading" style={{fontSize: '50px'}} />)
                :
                (<Layout className="detailProduct">
                    <Layout style={{ padding: '0 24px 24px', background: '#fff' }}>
                        <div className="text-center" style={{margin: '20px 0px'}}>
                            <img width="400" src={this.state.img} alt={this.state.title}/>
                        </div>
                        <Typography.Title level={2} style={{marginBottom: '0'}}>{this.state.title} {this.renderStars(this.state.stars)}</Typography.Title>
                        <Typography.Text disabled style={{marginBottom: '20px'}}>{this.state.brand}</Typography.Text>
                        <div className="description">
                            <Typography.Text>{this.state.description}</Typography.Text>
                            <Typography.Title level={4}>Precio por día: ${Number(this.state.price).toLocaleString(navigator.language, { minimumFractionDigits: 2 })}</Typography.Title>
                        </div>
                    </Layout>
                    <Sider width='20%' className="transparent" style={{padding: '10px 5px'}}>
                        <Form >
                            <Typography.Title level={4} style={{fontSize:'16px'}}>Rango por fechas</Typography.Title>
                            <RangePicker className="rangeDate" onChange={dates=>{this.handlerChangeDate(dates)}} />
                            <div style={{textAlign: 'right'}}>
                                {this.state.loading_date ? <Icon type="loading" /> : this.state.icon_validation}
                            </div>
                            <div className="total">
                                <Typography.Text type="secondary">Días: {this.state.days}</Typography.Text> <br/>
                                <Typography.Text type="secondary">P/día: ${Number(this.state.price).toLocaleString(navigator.language, { minimumFractionDigits: 2 })}</Typography.Text><br/>
                                <hr style={{opacity: '0.3'}}/>
                                <Typography.Title level={4}>Total: ${Number(this.state.total).toLocaleString(navigator.language, { minimumFractionDigits: 2 })}</Typography.Title><br/>
                            </div>
                            <div className="text-center">
                                <Button type="primary" shape="round" style={{margin: 'auto'}} block disabled={this.state.button_disabled} onClick={()=> {
                                    this.rentProduct();
                                }}>Rentar!</Button>
                            </div>
                        </Form>
                    </Sider>
                </Layout>)
                }
            </React.Fragment>
        )
    }
}
