import React, {useEffect, useState, Component} from 'react'
import axios from 'axios';
import { url } from './url';
import Loader from './loader';
import { Link, Redirect, useParams } from 'react-router-dom';
import AdminNav from './adminNav';
import shoe from '../assets/show.jpg'
import { Form, FormGroup, Label, Input, Col } from "reactstrap";
import '../css/adminOrdDetails.css'

function CartItem({orderItems}){
    return orderItems.map(item=>
        <div className="row cart_item mt-3 mb-3" id={item._id}>
            <div className="col-4 col-md-5 col-lg-6 img_cont">
                <img src={shoe} alt=""/>
                <div className="detail">{item.products.name}</div>
            </div>
            <div className="col-2 col-md-2 col-lg-2 price">₹ {item.products.price}</div>
            <div className="col-3 col-md-3 col-lg-2 quantity">
                <div className="counter">
                    <input type="number" style={{border: "1px solid limegreen", borderRadius: "5px"}} value={item.quantity} disabled/>
                </div>
            </div>
            <div className="col-3 col-md-2 col-lg-2 total">₹ {item.total}</div>
        </div>
    )
}

class UpdateForm extends Component{
    constructor(props){
        super(props);
        this.state={
            status: null,
            tracking: this.props.order.tracking,
        }

        this.updateStatus = this.updateStatus.bind(this);
        this.updateTracking = this.updateTracking.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    updateStatus(){
        const token=localStorage.getItem('token')
        if(this.state.status){
            axios
            .put(url+'/order/status/'+this.props.order._id,{
                "status": this.state.status
            },{
                headers: {Authorization: `Bearer ${token}`}
            })
            .then(()=>{
                alert("Order Status Updated")
                window.location.reload()
            })
            .catch((err)=>{
                alert(err)
            })
        }
        else{
            alert("Please Update Status")
        }
    }

    updateTracking(){
        const token=localStorage.getItem('token')
        if(this.state.tracking){
            axios
            .put(url+'/order/tracking/'+this.props.order._id,{
                "tracking": this.state.tracking
            },{
                headers: {Authorization: `Bearer ${token}`}
            })
            .then(()=>{
                alert("Order Tracking Link Updated")
                window.location.reload()
            })
            .catch((err)=>{
                alert(err)
            })
        }
        else{
            alert("Please Update Tracking")
        }
    }

    handleInputChange(event){
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <Form>
                <FormGroup row>
                    <Label htmlFor="name" lg={3}>Status:</Label>
                    <Col lg={3} >
                        <select name="status" onChange={this.handleInputChange}>
                            <option value="Order Pending Approval">Order Pending Approval</option>
                            <option value="Order Approved">Order Approved</option>
                            <option value="Order Out For Delivery">Order Out For Delivery</option>
                            <option value="Delivered">Delivered</option>
                        </select>
                    </Col>
                    <Col lg={4}>
                        <div><b>Current Order Status:</b> {this.props.order.status}</div>
                    </Col>
                    <Col lg={2}>
                        <div className="admin_btn_cont">
                            <div className="admin_sub_btn" onClick={this.updateStatus}>Update</div>
                        </div>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="em" lg={3}>Tracking Link:</Label>
                    <Col  lg={7} >
                        <Input type="text"  id="type" name="tracking" autoComplete="off" placeholder="Tracking Link" onChange={this.handleInputChange} value={this.state.tracking}/>
                    </Col>
                    <Col lg={2}>
                        <div className="admin_btn_cont">
                            <div className="admin_sub_btn" onClick={this.updateTracking}>Update</div>
                        </div>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}
export default function AdminOrdDeatail(props) {

    const [response, setResponse] = useState(false)
    const [order, setOrder] = useState()

    const params = useParams()

    useEffect(()=>{
        props.setAdmin("true")
        const token = localStorage.getItem('token')
        axios
        .get(url+'/order/'+params.ordID,{
            headers: { Authorization: `Bearer ${token}` }
        })
        .then((res)=>{
            if(res.status===200)
                setOrder(res.data)
            setResponse(true)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    const [nav, setNav] = useState("hide");

    function navToggle(){
        if(nav=="hide"){
            setNav("show")
        }
        else{
            setNav("hide")
        }
    }

    function orderDelete(){
        const token = localStorage.getItem('token')
        axios
        .delete(url+'/order/'+params.ordID,{
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(()=>{
            alert("Order Deleted")
            window.location.href = "/adminOrders";
        })
        .catch((err)=>{
            alert(err)
        })
    }

    if(response){
        if(order){
            return (
                <div className="admin_ord_detail">
                    <Link to="/adminHomepage" className="admin_homebtn">
                        <i class="fa fa-home"></i>
                    </Link>
                    <div className="admin_toggle" onClick={navToggle}>
                        <i class="fa fa-bars"></i>
                    </div>
                    <div className="admin_delete_dish" onClick={orderDelete}>
                        <i class="fa fa-trash"></i>
                        <span>Delete Order</span>
                    </div>
                    <AdminNav nav={nav} />
                    <div className="cart container mb-5">
                        <div className="head_">Update Order</div>
                        <UpdateForm order={order}/>
                        <div className="head">Order Number: {order._id}</div>
                            <div className="ord_upd_cont">
                                <div className="ord_upd status"><span>Status:</span>{order.status}</div>
                                <div className="ord_upd tracking"><span>Tracking Link:</span><a href={order.tracking} target="_blank">{order.tracking}</a></div>
                            </div>
                            <div className="row heading">
                                <div className="col-4 col-md-5 col-lg-6">Product</div>
                                <div className="col-2 col-md-2 col-lg-2">Price</div>
                                <div className="col-3 col-md-3 col-lg-2">Quantity</div>
                                <div className="col-3 col-md-2 col-lg-2">Total</div>
                            </div>
                            <CartItem orderItems={order.orderItems} />
                            <div className="row">
                                <div className="total_cont">
                                    <div>Total</div>
                                    <div className="total">₹ {order.grandTotal}</div>
                                </div>
                            </div>
                            <div className="row row3">
                                <div className="col-12 col-md-6 p-3">
                                    <div className="add bill_add">
                                        <div className="heading">Billing Address</div>
                                        <div className="name">Name: {order.user.firstname} {order.user.lastname}</div>
                                        <p>{order.user.billing}</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 p-3">
                                    <div className="add ship_add">
                                        <div className="heading">Shipping Address</div>
                                        <div className="name">Name: {order.shipping.name}</div>
                                        <p>{order.shipping.address}</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            )
        }
        else{
            return <Redirect to="/adminOrders" />
        }
    }
    else{
        return <Loader/>
    }
}
