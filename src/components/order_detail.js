import React, {useEffect} from 'react'
import shoe from '../assets/show.jpg'
import '../css/cart.css'
import '../css/order_detail.css'

function CartItem(){
    return(
        <div className="row cart_item mt-3 mb-3">
            <div className="col-4 col-md-5 col-lg-6 img_cont">
                <img src={shoe} alt=""/>
                <div className="detail">Product Name</div>
            </div>
            <div className="col-2 col-md-2 col-lg-2 price">₹ Price</div>
            <div className="col-3 col-md-3 col-lg-2 quantity">
                <div className="counter">
                    <input type="number" style={{border: "1px solid limegreen", borderRadius: "5px"}} disabled/>
                    
                </div>
            </div>
            <div className="col-3 col-md-2 col-lg-2 total">₹ Total Price</div>
        </div>
    )
}

export default function Order_detail() {

    useEffect(() => {
        document.title = "GSA Sports | Order Detail"
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className="cart container mb-5">
            <div className="head">Order Number: </div>
            <div className="ord_upd_cont">
                <div className="ord_upd status"><span>Status:</span>Some random status</div>
                <div className="ord_upd tracking"><span>Tracking Link:</span><a href="" target="_blank">www.linktopackage.com</a></div>
            </div>
            <div className="row heading">
                <div className="col-4 col-md-5 col-lg-6">Product</div>
                <div className="col-2 col-md-2 col-lg-2">Price</div>
                <div className="col-3 col-md-3 col-lg-2">Quantity</div>
                <div className="col-3 col-md-2 col-lg-2">Total</div>
            </div>
            <CartItem />
            <div className="row">
                <div className="total_cont">
                    <div>Total</div>
                    <div className="total">₹ Total</div>
                </div>
            </div>
            <div className="row row3">
                <div className="col-12 col-md-6 p-3">
                    <div className="add bill_add">
                        <div className="heading">Billing Address</div>
                        <div className="name">Name: Full Name</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatum dolores hic quo corrupti harum voluptas placeat ad nam? Id.</p>
                    </div>
                </div>
                <div className="col-12 col-md-6 p-3">
                    <div className="add ship_add">
                        <div className="heading">Shipping Address</div>
                        <div className="name">Name: Full Name</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatum dolores hic quo corrupti harum voluptas placeat ad nam? Id.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
