import React, {useEffect, useState} from 'react'
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { url } from './url';
import AdminNav from './adminNav';
import '../css/adminOrders.css'
import Loader from './loader';

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
function ActiveOrderItem({orders}){
    let order = orders.filter(ord=>ord.status!=="Delivered")
    if(order.length>=1){
        return order.map(order=>
            <div className="col-12 col-lg-6 p-2 p-lg-3" id={order._id}>
                <Link to={`/adminOrdDetail/${order._id}`}>
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
    else{
        return <div className="admin_no_active_order">No Active Orders</div>
    }
}
function DeliveredOrderItem({orders}){
    
    let order = orders.filter(ord=>ord.status==="Delivered")
    if(order){
        return order.map(order=>
            <div className="col-12 col-lg-6 p-2 p-lg-3" id={order._id}>
                <Link to={`/adminOrdDetail/${order._id}`}>
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
    else{
        return <div></div>
    }
}

function TotalSales(props){
    
    const [TotalSales, setTotalSales] = useState()
    let total = 0;
    useEffect(()=>{
        props.orders.map(ord=>{
            total = total + ord.grandTotal
        })
        setTotalSales(total)
    },[])

    return(
        <div className="total">
            <b>Total Sales:</b> ₹ {TotalSales}
        </div>
    )
}

export default function AdminOrder(props) {

    const [response, setResponse] = useState(false)
    const [orders, setOrders] = useState()
    const [ordID, setOrdID] = useState("")

    useEffect(()=>{
        props.setAdmin("true")
        const token = localStorage.getItem('token')
        axios
        .get(url+'/order/all',{
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

    function orderval(event){
        setOrdID(event.target.value)
    }

    function search(){  
        const token = localStorage.getItem('token')
        axios
        .get(url+'/order/'+ordID,{
            headers: { Authorization: `Bearer ${token}` }
        })
        .then((res)=>{
            if(res.status===200)
                window.location.href = `adminOrdDetail/${ordID}`
        })
        .catch((err)=>{
            alert("Order Does Not Exist!!!!", ordID)
        })
    }

    if(response){
        if(orders){
            return (
                <div className="adminOrd">
                    <Link to="/adminHomepage" className="admin_homebtn">
                        <i className="fa fa-home"></i>
                    </Link>
                    <div className="admin_toggle" onClick={navToggle}>
                        <i className="fa fa-bars"></i>
                    </div>
                    <AdminNav nav={nav} />
                    <div className="search_bar">
                        <input type="text" onChange={orderval} value={ordID} placeholder="Enter Order ID" />
                        <i class="fa fa-search" onClick={search}></i>
                    </div>
                    <TotalSales orders={orders}/>
                    <div className="orders container-fluid">
                        <div className="heading">Active Orders</div>
                        <div className="row">
                            <ActiveOrderItem orders={orders}/>
                        </div>
                    </div>
                    <div className="orders">
                    <div className="heading">Delievered Orders</div>
                        <div className="row">
                            <DeliveredOrderItem orders={orders} />
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return <Redirect to="/adminHomepage"/>
        }
    }
    else{
        return <Loader/>
    }
}
