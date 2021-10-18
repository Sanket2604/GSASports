import React, {Component, useState, useEffect} from 'react'
import axios from 'axios';
import { url } from './url';
import { Redirect } from 'react-router';
import qrcode from '../assets/qrcode.png'
import paytm from '../assets/payment/paytm.png'
import phonepe from '../assets/payment/phonepe.png'
import amazonpay from '../assets/payment/amazonpay.png'
import gpay from '../assets/payment/gpay.png'
import '../css/orderConfirmation.css'
import Loader from './loader';

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
                <div className="col-5">{item.products.name}</div>
                <div className="col-2">NA</div>
                <div className="col-2">X {item.quantity}</div>
                <div className="col-3">₹ {item.total}</div>
            </div>
        )
    }
}

export default function OrderConfirmation() {

    const [cart, setCart] = useState()
    const [redirect, setRedirect] = useState(true)

    useEffect(() => {
        document.title = "GSA Sports | Payment"
        window.scrollTo(0, 0)
        const token = localStorage.getItem('token');
        axios
        .get(url+'/cart',{
            headers: { Authorization: `Bearer ${token}` }
        })
        .then((response) =>{
            setRedirect(false)
            setCart(response.data)
        })
        .catch(error => {
            console.log("Failed To Update Cart List")
        })
    },[])

    function placeOrder(){
        const token = localStorage.getItem('token');
        axios
        .post(url+'/order',{
            "shippingName": "Sanket Banerjee",
            "shippingAddress": "#05, 1st Floor, Maruti Nandan Apartment, Mahaveer Rescidency, Avalahalli, Yelahanka, Bangalore 560064, Karnataka"
        },{
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(() =>{
            alert("Order Placed!!!")
        })
        .catch(error => {
            console.log("Failed To Place Order :(")
        })
    }

    if(cart){
        if(redirect){
            return <Redirect to="/cart"/>
        }
        else{
            return (
                <div className="order_confirm container_fluid">
                    <div className="heading">Payment</div>
                    <div className="row">
                        <div className="col-12 col-lg-6 cart_cont">
                            <div className="container_fluid cart_details">
                                <div className="row header">
                                    <div className="col-5">Product</div>
                                    <div className="col-2">Size</div>
                                    <div className="col-2">Quantity</div>
                                    <div className="col-3">Total</div>
                                </div>
                                <Item  cartItem={cart.cartItems} />
                                <div className="row total">
                                    <div className="col-8"></div>
                                    <div className="col-1">Total:</div>
                                    <div className="col-3">₹ {cart.grandTotal}</div>
                                </div>
                            </div>
                            <div className="btn btn-primary mt-5" onClick={placeOrder}>
                                Place Order
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 qr_cont">
                            <div className="header">Scan To Pay</div>
                            <div className="qr_scanner">
                                <img src={qrcode} alt="" />
                            </div>
                            <div className="pay_met container_fluid">
                                <div className="header">Accepted Payments (Only UPI Transfer)</div>
                                <div className="row">
                                    <div className="col-3">
                                        <img src={paytm} alt="" className="pay_c" />
                                    </div>
                                    <div className="col-3">
                                        <img src={phonepe} alt="" className="pay_c" />
                                    </div>
                                    <div className="col-3">
                                        <img src={gpay} alt="" className="pay_c" />
                                    </div>
                                    <div className="col-3">
                                        <img src={amazonpay} alt="" className="pay_c" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
    else{
        return <Loader/>
    }
}