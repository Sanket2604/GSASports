import React, {useEffect, useState} from 'react'
import shoe from '../assets/show.jpg'
import arrow_up from '../assets/nav/arrowup.png'
import arrow_down from '../assets/nav/arrowdown.png'
import { Link } from 'react-router-dom'
import '../css/cart.css'
import axios from 'axios'
import { url } from './url'

function CartItem(){
    return(
        <div className="row cart_item mt-3 mb-3">
            <div className="col-4 col-md-4 col-lg-4 img_cont">
                <img src={shoe} alt=""/>
                <div className="detail">Product Name</div>
            </div>
            <div className="col-2 col-md-2 col-lg-2 price">₹ Price</div>
            <div className="col-3 col-md-2 col-lg-2 quantity">
                <div className="counter">
                    <input type="number" />
                    <div className="controls">
                        <div className="up"><img src={arrow_up} alt="" style={{transform:"translateY(3px)"}} height="25px" width="15px" /></div>
                        <div className="down"><img src={arrow_down} alt="" style={{transform:"translateY(-3px)"}} height="25px" width="15px" /></div>
                    </div>
                </div>
            </div>
            <div className="col-2 col-md-2 col-lg-2 tax">
                <div className="tp"><span>SGST:</span> 5%</div>
                <div className="tp"><span>CGST:</span> 5%</div>
            </div>
            <div className="col-3 col-md-2 col-lg-2 total">₹ Total Price</div>
            <div className="remove_item">-</div>
        </div>
    )
}

export default function Cart(props) {

    const [showCart, setShowCart] = useState(false)

    useEffect(() => {
        document.title = "GSA Sports | Login"
        window.scrollTo(0, 0)
        const token = localStorage.getItem('token')
        axios
        .get(url+'/user/verify',{
            headers: { Authorization: `Bearer ${token}` }
        })
        .then((res)=>{
            if(res.status===200)
                setShowCart(true)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, []);

    if(showCart){
        return (
            <div className="cart container mb-5">
                <div className="head">Your Cart</div>
                <div className="row heading">
                    <div className="col-3 col-md-4 col-lg-4">Product</div>
                    <div className="col-2 col-md-2 col-lg-2">Price</div>
                    <div className="col-2 col-md-2 col-lg-2">Quantity</div>
                    <div className="col-2 col-md-2 col-lg-2">Tax</div>
                    <div className="col-2 col-md-2 col-lg-2">Total</div>
                </div>
                <CartItem />
                <div className="row">
                    <div className="total_cont">
                        <div>Total</div>
                        <div className="total">₹ Total</div>
                    </div>
                    <div className="checkout">
                        <Link to="/checkout"><div className="checkout_btn">Checkout</div></Link>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <div></div>
        )
    }
}
