import React, {useEffect} from 'react'
import '../css/order_list.css'
import { Link } from 'react-router-dom'

function OrderItem(){
    return(
        <div className="col-12 col-lg-6 p-2 p-lg-3">
            <Link to="/order_detail">
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

export default function Orderlist() {

    useEffect(() => {
        document.title = "GSA Sports | Your Orders"
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className="order_list container-fluid">
            <div className="heading">Your Orders</div>
            <div className="row">
                <OrderItem/>
                <OrderItem/>
                <OrderItem/>
                <OrderItem/>
            </div>
        </div>
    )
}
