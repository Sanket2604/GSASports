import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { url } from './url'
import { useParams } from 'react-router'
import '../css/product_detail.css'
import products from '../db/productList'
import cart from '../assets/nav/shopping.svg'
import shoe from '../assets/show.jpg'
import arrow_up from '../assets/nav/arrowup.png'
import arrow_down from '../assets/nav/arrowdown.png'
import { Link } from 'react-router-dom'
import Tilt from 'react-vanilla-tilt'
import Loader from './loader'

function Size({mainprod}){
    if(mainprod.size_ava){
        return mainprod.size.map( size =>
                <div className="s">{size}</div>
        )
    }
    else{
        return(<div></div>)
    }
}
function SizeCont({mainprod}){
    if(mainprod.size_ava){
        return(
            <div className="size">
                <div className="heading">Size:</div>
                <Size mainprod={mainprod}/>
            </div>
        )
    }
    else{
        return(<div></div>)
    }
}
export default function Product_detail() {

    const prod = useParams();
    const mainprod = products.filter(sprod => prod.pname === sprod.name && prod.cat === sprod.category)

    const [show, setShow] = useState(false)

    useEffect(() => {
        document.title = `GSA Sports | ${prod.cat} | ${prod.pname}`
        window.scrollTo(0, 0)
        const mainprod = products.filter(sprod => prod.pname === sprod.name && prod.cat === sprod.category)
        document.title = "GSA Sports | Your Orders"
        window.scrollTo(0, 0)
        const token = localStorage.getItem('token')
        axios
        .get(url+'/user/verify',{
            headers: { Authorization: `Bearer ${token}` }
        })
        .then((res)=>{
            if(res.status===200)
                setShow(true)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, []);


    if(show){
        return (
            <div className="prod_det container-fluid">
                <div className="heading">{mainprod[0].name}</div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-5">
                        <Tilt  className="img_cont">
                            <img className="prod_pic" src={shoe} alt="Reload" />
                        </Tilt>
                    </div>
                    <div className="col-12 col-md-6 col-lg-7">
                        <div className="content">
                            <div className="desc">{mainprod[0].desc}</div>
                            <SizeCont mainprod={mainprod[0]} />
                            <div className="quantity">
                                <div className="counter">
                                    <input type="number" />
                                    <div className="controls">
                                        <div className="up"><img src={arrow_up} alt="" style={{transform:"translateY(3px)"}} height="25px" width="15px" /></div>
                                        <div className="down"><img src={arrow_down} alt="" style={{transform:"translateY(-3px)"}} height="25px" width="15px" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="cart_cont">
                                <Link to="/cart"><div className="cart_btn">Add To Cart <img src={cart} alt="Error" /></div></Link>
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
