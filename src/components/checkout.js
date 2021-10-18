import React, {Component} from 'react'
import '../css/checkout.css'
import axios from 'axios'
import {url} from './url'
import Loader from './loader'
import dustbin from '../assets/nav/delete.svg'
import edit from '../assets/nav/edit.svg'
import { Link, Redirect } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback } from "reactstrap";

class Address extends Component{

    constructor(props){
        super(props);
        this.state={
            address: null,
        }
        // this.deleAddress = this.deleAddress.bind(this);
    }

    componentDidMount(){
        const token = localStorage.getItem('token');
        axios
        .get(url+'/user/getUser',{
            headers: { Authorization: `Bearer ${token}` }
        })
        .then((response) =>{
            this.setState({
                address: response.data.shipping,
            })
        })
        .catch(error => {
            console.log("Failed To Update Address")
        })
    }

    // deleAddress(id){
    //     const token = localStorage.getItem('token');
    //     if(token !== null){
    //         console.log(token)
    //         axios
    //         .delete(url+'/v1/address/',{
    //             data:{
    //                 addressId: id,
    //             },
    //             headers: { 
    //                 Authorization: `Bearer ${token}` 
    //             }
    //         }
    //         )
    //         .then((response) =>{
    //             window.location.reload();
    //         })
    //         .catch(error => {
    //             console.log("Failed To Delete Address")
    //         })
    //     }
    //     else(
    //         console.log("No Token")
    //     )
    // }

    render(){
        if(this.state.address){
            if(this.state.address.length!==0){
                return this.state.address.map(item=>
                    <div className="col-12 col-md-6" >
                        <div className="box">
                            <div>
                                <h5>item.name <span>(item.type)</span></h5>
                                <p>#item.addr1 item.addr2 item.landmark item.city item.state item.pincode</p>
                            </div>
                            <div className="delete"><img src={dustbin} alt="" /></div>
                            <div className="edit"><img src={edit} alt="" /></div>
                        </div>
                    </div>
                )
            }
            else{
                return (
                    <div className="col-12 col-md-6" >
                        <div className="box no_add">
                            <h5>Add A Shipping Address</h5>
                        </div>
                    </div>
                )
                
            }
        }
        else{
            return(
                <div className="circle_loader_cont">
                    <div className="circle_loader"></div>
                </div>
            ) 
        }
    }
}

class Item extends Component{

    constructor(props){
        super(props);
        this.state={
            cartItem: this.props.cartItem,
            total: 0,
        }
    }

    render(){
        return this.state.cartItem.map(item=>
            <div className="row content" id={item._id}>
                <div className="col-6">{item.products.name}</div>
                <div className="col-3">X {item.quantity}</div>
                <div className="col-3">₹ {item.total}</div>
            </div>
        )
    }
}

class Checkout extends Component{

    constructor(props){
        super(props);
        this.state = {
            id: '',
            redirect: true,
            name: '',
            type: '',
            address1: '',
            landmark: '',
            city:'',
            state:'',
            pincode:'',
            update: false,
            cart: null,
            touched: {
                name: false,
                type: false,
                address1: false,
                state: false,
                landmark: false,
                city: false,
                pincode: false
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.updateForm = this.updateForm.bind(this);
    }

    componentDidMount(){
        const token = localStorage.getItem('token');
        axios
        .get(url+'/cart',{
            headers: { Authorization: `Bearer ${token}` }
        })
        .then((response) =>{
            this.setState({
                cart: response.data,
                redirect: false
            })
        })
        .catch(error => {
            console.log("Failed To Update Cart List")
        })
    }

    updateForm(id, name, addr1, landmark, city, state, pincode){
        this.setState({
            id: id,
            name: name, 
            address1: addr1,
            landmark: landmark,
            city: city,
            state: state, 
            pincode: pincode,
            update: true
        })
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type ==='checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    validate(name, address1, landmark, city, state, pincode){
        const errors = {
            name: '',
            address1: '',
            landmark: '',
            city:'',
            state:'',
            pincode:'',
        }

        if (this.state.touched.name && name.length < 3){
            errors.name = 'Name Should Be Greater Than or Equal To 3 Charecters'
        }

        if(this.state.touched.address1 && address1.length==0){
            errors.address1 = 'Error';
        }
        if(this.state.touched.landmark && landmark.length==0){
            errors.landmark = 'Error';
        }

        if(this.state.touched.state && state.length==0){
            errors.state = 'Error';
        }

        if(this.state.touched.city && city.length==0){
            errors.city = 'Error';
        }

        if(this.state.touched.pincode  && pincode.length==0){
            errors.pincode = 'Error';
        }

        return errors;
    }

    // handleSubmit(event){
    //     if(this.state.update){
    //         const token = localStorage.getItem('token');
    //         console.log("Edit")
    //         axios
    //         .put(url+'/v1/address/',{
    //             addressId: this.state.id,
    //             name: this.state.name,
    //             addr1: this.state.address1,
    //             landmark: this.state.landmark,
    //             city: this.state.city,
    //             state: this.state.state,
    //             pincode: this.state.pincode
    //         },
    //         {
    //             headers: { Authorization: `Bearer ${token}` }
    //         }
    //         )
    //         .then((response) =>{
    //             this.setState({
    //                 update: false,
    //             })
    //             console.log("Address Updated")
    //             window.location.reload();
    //         })
    //         .catch(error => {
    //             console.log("Failed To Update Address")
    //         })
    //     }
    //     else{
    //         const token = localStorage.getItem('token');
    //             axios
    //             .post(url+'/v1/address/',{
    //                 name: this.state.name,
    //                 addr1: this.state.address1,
    //                 addr2: this.state.address2,
    //                 landmark: this.state.landmark,
    //                 city: this.state.city,
    //                 state: this.state.state,
    //                 pincode: this.state.pincode
    //             },
    //             {
    //                 headers: { Authorization: `Bearer ${token}` }
    //             }
    //             )
    //             .then((response) =>{
    //                 window.location.reload();
    //                 console.log("Address Added")    
    //             })
    //             .catch(error => {
    //                 console.log("Failed To Add Address")
    //             })
    //     }
    //     event.preventDefault();
    // }

    render() {
        const errors = this.validate(this.state.name, this.state.type, this.state.address1, this.state.landmark, this.state.city, this.state.state, this.state.pincode)
        if(this.state.cart){
            if(this.state.redirect){
                return <Redirect to="/cart"/>
            }
            else{
                return(
                    <div className="checkout container mb-5">
                        <div className="row">
                            <div className="col-12 col-md-7 save_add">
                                <h5><b>Saved Address</b></h5>
                                <div className="container-fluid">
                                    <div className="row">
                                        <Address updateForm={this.updateForm} updShipAdd={this.props.updShipAdd} />
                                    </div>
                                </div>
                                <div className="new_add">
                                    <h5><b>Add a New Shipping Address</b></h5>
                                    {/* <Form onSubmit={this.handleSubmit}> */}
                                    <Form>
                                        <FormGroup row>
                                            <Label htmlFor="name" lg={3}>Full Name</Label>
                                            <Col lg={9} >
                                                <Input type="text" id="name" name="name" autoComplete="off" invalid={errors.name !== ''} placeholder="Full Name" value={this.state.name} onBlur={this.handleBlur('name')} onChange = {this.handleInputChange} />
                                                <FormFeedback>{errors.name}</FormFeedback>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label htmlFor="address1" lg={3}>Address</Label>
                                            <Col lg={9} >
                                                <Input type="text" id="address1" name="address1" autoComplete="off" invalid={errors.address1 !== ''} placeholder="Full Address" value={this.state.address1} onBlur={this.handleBlur('address1')} onChange = {this.handleInputChange} />
                                                <FormFeedback>{errors.address1}</FormFeedback>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label htmlFor="landmark" lg={3}>Landmark</Label>
                                            <Col  lg={9} >
                                                <Input type="input"  id="landmark" name="landmark" autoComplete="off" invalid={errors.landmark !== ''} placeholder="Landmark" value={this.state.landmark} onBlur={this.handleBlur('landmark')} onChange = {this.handleInputChange}/>
                                                <FormFeedback>{errors.landmark}</FormFeedback>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label htmlFor="city" lg={3}>City</Label>
                                            <Col  lg={9} >
                                                <Input type="text"  id="city" name="city" invalid={errors.city !== ''} autoComplete="off" placeholder="City" value={this.state.city} onBlur={this.handleBlur('city')} onChange = {this.handleInputChange}/>
                                                <FormFeedback>{errors.city}</FormFeedback>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label htmlFor="state" lg={3}>State</Label>
                                            <Col  lg={9} >
                                                <Input type="input"  id="state" name="state" invalid={errors.state !== ''} placeholder="State" autoComplete="off" value={this.state.state} onBlur={this.handleBlur('state')} onChange = {this.handleInputChange}/>
                                                <FormFeedback>{errors.state}</FormFeedback>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label htmlFor="pincode" lg={3}>Pincode</Label>
                                            <Col  lg={9} >
                                                <Input type="number"  id="pincode" name="pincode" autoComplete="off" invalid={errors.pincode !== ''} placeholder="Pincode" value={this.state.pincode} onBlur={this.handleBlur('pincode')} onChange = {this.handleInputChange}/>
                                                <FormFeedback>{errors.pincode}</FormFeedback>
                                            </Col>
                                        </FormGroup>
                                        
                                        <FormGroup row>
                                            <Col md={{size: 12}}>
                                                <div className="submit_cont">
                                                    <div className="submit_btn">Submit</div>
                                                </div>
                                            </Col>
                                        </FormGroup>
                                    </Form>
                                </div>
                            </div>
                            <div className="col-12 col-md-5 order_summary">
                                <h5><b>Your Order</b></h5>
                                <div className="container_fluid">
                                    <div className="row header">
                                        <div className="col-6">Product</div>
                                        <div className="col-3">Quantity</div>
                                        <div className="col-3">Total</div>
                                    </div>
                                    <Item  cartItem={this.state.cart.cartItems} />
                                    <div className="row total">
                                        <div className="col-8"></div>
                                        <div className="col-1">Total:</div>
                                        <div className="col-3">₹ {this.state.cart.grandTotal}</div>
                                    </div>
                                    <Link to="/order_confirmation">
                                        <div className="row pay_cont">
                                            <div className="pay_btn">Proceed To Pay</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
        }
        else{
            return <Loader/>
        }
    }

}

export default Checkout;