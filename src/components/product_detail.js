import React, {useEffect, useState, Component} from 'react'
import axios from 'axios'
import { url } from './url'
import { useParams } from 'react-router'
import '../css/product_detail.css'
import products from '../db/productList'
import cart from '../assets/nav/shopping.svg'
import arrow_up from '../assets/nav/arrowup.png'
import arrow_down from '../assets/nav/arrowdown.png'
import Tilt from 'react-vanilla-tilt'
import Loader from './loader'

function Size({mainprod, setSize}){

    function selectSize(siz){
        mainprod.size.map(item=>{
            if(item===siz){
                document.getElementById(item).classList.add('active')
                setSize(siz)        
            }
            else{
                document.getElementById(item).classList.remove('active')
            }
        })
    }

    if(mainprod.sizeAva==="true"){
        return mainprod.size.map( siz =>
            <div className="s" id={siz} onClick={()=>selectSize(siz)}>{siz}</div>
        )
    }
    else{
        return(<div></div>)
    }
}

function SizeCont({mainprod, setSize}){
    if(mainprod.sizeAva==="true"){
        return(
            <div className="size">
                <div className="heading">Size:</div>
                <Size mainprod={mainprod} setSize={setSize} />
            </div>
        )
    }
    else{
        return(<div></div>)
    }
}

export default function Product_detail() {

    const prod = useParams();
    const [mainprod, setMainProd] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const [size, setSize] = useState("NA")
    const [cart_msg, setCart_msg] = useState("")

    useEffect(() => {
        document.title = `GSA Sports | ${prod.cat} | ${prod.pname}`
        window.scrollTo(0, 0)
        const mainprod = products.filter(sprod => prod.pname === sprod.name && prod.cat === sprod.category)
        const token = localStorage.getItem('token')
        axios
        .get(url+'/products/'+prod.pid)
        .then((res)=>{
            setMainProd(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, []);

    function addToCart(){
        let token = localStorage.getItem("token")
        axios
        .post(url+'/cart',{
            "prodId": mainprod._id,
            "quantity": quantity,
            "size": size
        },{
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(()=>{
            setCart_msg("Added To Cart")
            document.querySelector('.cart_msg').classList.add('show')
            setTimeout(()=>{ 
                document.querySelector('.cart_msg').classList.remove('show') 
            }, 1500);
        })
        .catch((err)=>{
            setCart_msg("Please Login")
            document.querySelector('.cart_msg').classList.add('error')
            setTimeout(()=>{ 
                window.location.href = "/login"
            }, 3000);
        })
    }

    function handleInputChange(event){
        const target = event.target
        const value = target.value
        setQuantity(value)
    }
    
    function quantityUpdt(qty) {
        
        setQuantity(qty)
        if(quantity<1){
            setQuantity(1)
        }
    }

    if(mainprod){
        return (
            <div className="prod_det container-fluid" id={mainprod._id}>
                <div className="heading">{mainprod.name}</div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-5">
                        <Tilt  className="img_cont">
                            <img className="prod_pic" src={url+mainprod.image} alt="Reload" />
                        </Tilt>
                    </div>
                    <div className="col-12 col-md-6 col-lg-7">
                        <div className="content">
                            <div className="desc">{mainprod.description}</div>
                            <SizeCont mainprod={mainprod} setSize={setSize} />
                            <div className="quantity">
                                <div className="counter">
                                    <input type="number" name="quantity" value={quantity} onChange={handleInputChange}/>
                                    <div className="controls">
                                        <div className="up" onClick={()=>quantityUpdt(quantity+1)}><img src={arrow_up} alt="" style={{transform:"translateY(3px)"}} height="25px" width="15px" /></div>
                                        <div className="down" onClick={()=>quantityUpdt(quantity-1)}><img src={arrow_down} alt="" style={{transform:"translateY(-3px)"}} height="25px" width="15px" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="cart_cont">
                                <div className="cart_btn" onClick={addToCart}>Add To Cart <img src={cart} alt="Error" /></div>
                                <span className="cart_msg">{cart_msg}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <Loader/>
        )
    }
}
