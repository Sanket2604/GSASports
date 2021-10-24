import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { url } from './url'
import '../css/order_list.css'
import cartimg from '../assets/cart/cart.svg'
import { Link, Redirect } from 'react-router-dom'
import Loader from './loader'

function ProdNames({prods}){
    return prods.map(prod=>
        <span id={prod.id}>{prod.products.name},</span>
    )
}
function DateFormat({timestamp}) {
    
    let f_date = timestamp.split("T")
    let arr_date = f_date[0].split("-")
    let date=[]
    date[0]=arr_date[2]
    date[1]=arr_date[1]
    date[2]=arr_date[0]

    return date.join('/');
}
function OrderItem({orders}){
    return orders.map(order=>
        <div className="col-12 col-lg-6 p-2 p-lg-3" id={order._id}>
            <Link to={`/order_detail/${order._id}`}>
                <div className="order_item">
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <div className="field ord_no"><span>Order Number:</span> {order._id}</div>
                        <div className="field ord_date"><span>Order Date:</span><DateFormat timestamp={order.createdAt}/></div>
                    </div>
                    <div className="field ord_prod"><span>Product's Ordered:</span><br/><ProdNames prods={order.orderItems} /></div>
                    <div className="field ship_add"><span>Shipping Address:</span><br/>{order.shipping.address}</div>
                </div>
            </Link>
        </div>
    )
}

export default function Orderlist() {
    
    const [response, setResponse] = useState(false)
    const [orders, setOrders] = useState()

    useEffect(() => {
        document.title = "GSA Sports | Your Orders"
        window.scrollTo(0, 0)
        const token = localStorage.getItem('token')
        axios
        .get(url+'/order',{
            headers: { Authorization: `Bearer ${token}` }
        })
        .then((res)=>{
            if(res.status===200)
                setOrders(res.data)
            setResponse(true)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[]);

    if(response){
        if(orders){
            if(orders.length!==0){
                return (
                    <div className="order_list container-fluid">
                        <div className="heading">Your Orders</div>
                        <div className="row">
                            <OrderItem orders={orders}/>
                        </div>
                    </div>
                )
            }
            else{
                return(
                    <div className="order_list empty">
                        <div className="heading">Your Orders</div>
                        <div className="row">
                            <p>You Have Not Placed Any Order.</p>
                            <Link to="/shop">
                                <div className="btn_cont">
                                    <div className="shop_btn">Start Shopping Now <img src={cartimg} alt="" height="30px" /></div>
                                </div>
                            </Link>
                        </div>
                    </div>
                )
            }
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
