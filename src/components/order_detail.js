import React, {useEffect, useState} from 'react'
import { Redirect, useParams } from 'react-router'
import shoe from '../assets/show.jpg'
import axios from 'axios'
import { url } from './url'
import '../css/cart.css'
import '../css/order_detail.css'
import Loader from './loader'

function Size(props){
    if(props.size!=="NA"){
        return <div>Size: {props.size}</div>
    }
    else{
        return <div></div>
    }
    
}

function CartItem({orderItems}){
    return orderItems.map(item=>
        <div className="row cart_item mt-3 mb-3" id={item._id}>
            <div className="col-4 col-md-5 col-lg-6 img_cont">
                <img src={url+item.products.image} alt="Reload"/>
                <div className="detail">{item.products.name}<Size size={item.size} /></div>
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

export default function Order_detail() {

    const [response, setResponse] = useState(false)
    const [order, setOrder] = useState()
    const [user, setUser] = useState()

    const params = useParams()

    useEffect(() => {
        document.title = "GSA Sports | Order Detail"
        window.scrollTo(0, 0)
        const token = localStorage.getItem('token')
        axios
        .get(url+'/order/'+params.ordID,{
            headers: { Authorization: `Bearer ${token}` }
        })
        .then((res)=>{
            setOrder(res.data)
            setResponse(true)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, []);

    if(response){
        if(order){
            return (
                <div className="cart container mb-5">
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
                                <p>{order.user.billing[0].address}, {order.user.billing[0].landmark}, {order.user.billing[0].city} - {order.user.billing[0].pincode}, {order.user.billing[0].state}</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 p-3">
                            <div className="add ship_add">
                                <div className="heading">Shipping Address</div>
                                <div className="name">Name: {order.shipping.name}</div>
                                <div className="name">Phone: {order.shipping.phone}</div>
                                <p>{order.shipping.address}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return <Redirect to="/login" />
        }
    }
    else{
        return(
            <Loader/>
        )
    }
    
}
