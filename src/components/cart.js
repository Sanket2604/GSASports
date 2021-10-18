import React, {Component, useEffect, useState} from 'react'
import shoe from '../assets/show.jpg'
import arrow_up from '../assets/nav/arrowup.png'
import arrow_down from '../assets/nav/arrowdown.png'
import emptyCart from '../assets/cart/empty_cart.png'
import cartimg from '../assets/cart/cart.svg'
import Loader from './loader'
import { Link } from 'react-router-dom'
import '../css/cart.css'
import axios from 'axios'
import { url } from './url'

class Counter extends Component{

    constructor(props) {
        super(props);
        this.state = {
            prodId: this.props.cartItem.products._id,
            quantity: this.props.cartItem.quantity 
        }
        this.quantityUpdt=this.quantityUpdt.bind(this)
        this.handleInputChange=this.handleInputChange.bind(this)
        this.qtyAxiosCall=this.qtyAxiosCall.bind(this)
    }

    handleInputChange(event){
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value,
        },()=>{
            this.qtyAxiosCall()
        })
    }
    
    quantityUpdt(qty) {
        this.setState({
            quantity: qty,
        },()=>{
            this.qtyAxiosCall()
        })
    }

    qtyAxiosCall(){
        console.log(this.state.prodId)
        console.log(this.state.quantity)
        let token = localStorage.getItem("token")
        axios
        .post(url+'/cart/quantity',{
            "prodId": this.state.prodId,
            "quantity": this.state.quantity
        },{
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(()=>{
            window.location.reload()
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render(){
        return(
            <div className="counter">
                <input type="number" name="quantity" value={this.state.quantity} onChange={this.handleInputChange}/>
                <div className="controls">
                    <div className="up" onClick={()=>this.quantityUpdt(this.state.quantity+1)}><img src={arrow_up} alt="" style={{transform:"translateY(3px)"}} height="25px" width="15px" /></div>
                    <div className="down" onClick={()=>this.quantityUpdt(this.state.quantity-1)}><img src={arrow_down} alt="" style={{transform:"translateY(-3px)"}} height="25px" width="15px" /></div>
                </div>
            </div>
        )
    }
}
function CartItem({cartItems}){

    function deleteProd(prodID){
        console.log(prodID)
        const token = localStorage.getItem('token')
        axios
        .delete(url+'/cart',{
            headers: { Authorization: `Bearer ${token}` },
            data: {
                "prodId": prodID
            }
        },
        )
        .then((res)=>{
            window.location.reload()
        })
        .catch((err)=>{
            alert(err)
        })
    }

    return cartItems.map(cartItem =>
        <div className="row cart_item mt-3 mb-3" id={cartItem._id}>
            <div className="col-4 col-md-4 col-lg-4 img_cont">
                <img src={shoe} alt=""/>
                <div className="detail">{cartItem.products.name}</div>
            </div>
            <div className="col-2 col-md-2 col-lg-2 price">₹ {cartItem.products.price}</div>
            <div className="col-3 col-md-2 col-lg-2 quantity">
                <Counter cartItem={cartItem}/>
            </div>
            <div className="col-2 col-md-2 col-lg-2 tax">
                <div className="tp"><span>SGST:</span> {cartItem.products.SGST}</div>
                <div className="tp"><span>CGST:</span> {cartItem.products.CGST}</div>
            </div>
            <div className="col-3 col-md-2 col-lg-2 total">₹ {cartItem.total}</div>
            <div className="remove_item" onClick={()=>deleteProd(cartItem.products._id)}>-</div>
        </div>
    )
}

export default function Cart() {

    const [cart, setCart] = useState()

    useEffect(() => {
        document.title = "GSA Sports | Cart"
        window.scrollTo(0, 0)
        const token = localStorage.getItem('token')
        axios
        .get(url+'/cart',{
            headers: { Authorization: `Bearer ${token}` }
        })
        .then((res)=>{
            setCart(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, []);

    if(cart){
        if(cart.cartItems.length===0){
            return(
                <div className="empty_cart">
                    <img src={emptyCart} alt="" />
                    <p>Your Cart is Empty.</p>
                    <Link to="/shop">
                        <div className="btn_cont">
                            <div className="shop_btn">Continue Shopping <img src={cartimg} alt="" height="30px" /></div>
                        </div>
                    </Link>
                </div>
            )
        }
        else{
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
                    <CartItem cartItems={cart.cartItems}/>
                    <div className="row">
                        <div className="total_cont">
                            <div>Total</div>
                            <div className="total">₹ {cart.grandTotal}</div>
                        </div>
                        <div className="checkout_cont">
                            <Link to="/checkout"><div className="checkout_btn">Checkout</div></Link>
                        </div>
                    </div>
                </div>
            )
        }
    }
    else{
        return(
            <Loader/>
        )
    }
}
