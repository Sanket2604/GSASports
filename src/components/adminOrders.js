import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import AdminNav from './adminNav';
import '../css/adminOrders.css'

function OrderItem(){
    return(
        <div className="col-12 col-lg-6 p-2 p-lg-3">
            <Link to="/adminOrdDetail">
                <div className="order_item">
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <div className="field ord_no"><span>Order Number:</span> 123456789</div>
                        <div className="field ord_date"><span>Order Date:</span>11/09/2021</div>
                    </div>
                    <div className="field ord_prod"><span>Product's Ordered:</span><br/>Cricket Bat, Leather Ball</div>
                    <div className="field ship_add"><span>Shipping Address:</span><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos minus adipisci quis, rem vel odit quae a incidunt alias neque.</div>
                </div>
            </Link>
        </div>
    )
}

export default function AdminOrder(props) {

    useEffect(()=>{
        props.setAdmin("true")
    })
    const [nav, setNav] = useState("hide");
    function navToggle(){
        if(nav=="hide"){
            setNav("show")
        }
        else{
            setNav("hide")
        }
    }
    return (
        <div className="adminOrd">
            <Link to="/adminHomepage" className="admin_homebtn">
                <i class="fa fa-home"></i>
            </Link>
            <div className="admin_toggle" onClick={navToggle}>
                <i class="fa fa-bars"></i>
            </div>
            <AdminNav nav={nav} />
            <div className="orders container-fluid">
                <div className="heading">Active Orders</div>
                <div className="row">
                    <OrderItem/>
                    <OrderItem/>
                    <OrderItem/>
                    <OrderItem/>
                </div>
            </div>
            <div className="orders">
            <div className="heading">Delievered Orders</div>
                <div className="row">
                    <OrderItem/>
                    <OrderItem/>
                    <OrderItem/>
                    <OrderItem/>
                    <OrderItem/>
                    <OrderItem/>
                    <OrderItem/>
                    <OrderItem/>
                </div>
            </div>
        </div>
    )
}
