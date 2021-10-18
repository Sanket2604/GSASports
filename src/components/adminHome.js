import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { url } from './url'
import { Link, Redirect } from 'react-router-dom'
import AdminNav from './adminNav'
import truck_loading from '../assets/admin/truck_loading.svg'
import truck from '../assets/admin/truck.svg'
import '../css/adminHome.css'
import Loader from './loader'

function CheckStock({products}){
    
    if(products.length === 0){
        return (
            <Link to="/adminProductsOutOfStock" className="prod_out_of_stock">
                <img src={truck_loading} alt="" height="22px" />
                <span>Check Stock</span>
            </Link>
        )
    }
    else{
        return(
            <Link to="/adminProductsOutOfStock" className="prod_out_of_stock Alert">
                <img src={truck_loading} alt="" height="22px" />
                <span>Check Stock</span>
            </Link>
        )
    }
}
export default function AdminHome(props) {

    const [products, setProducts] = useState()
    const [order, setOrders] = useState()
    const [redirect, setRedirect] = useState(true) 
    useEffect(()=>{
        document.title = "GSA Sports Admin"
        window.scrollTo(0, 0)
        props.setAdmin("true")
        const token = localStorage.getItem('token');
        axios
        .get(url+'/order/all',{
            headers: { Authorization: `Bearer ${token}` }
        })
        .then((response) =>{
            setRedirect(false)
            setOrders(response.data.filter(ord => ord.status !== "Delivered"))
        })
        .catch(error => {
            console.log("Failed To Update Cart List")
        })
        axios
        .get(url+'/products')
        .then((response) =>{
            setProducts(response.data.filter(prod => prod.stock <= 0))
        })
        .catch(error => {
            console.log("Failed To Update Cart List")
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
    
    if(products && order){
        if(redirect){
            return <Redirect to="/adminLogin"/>
        }
        else{
            return (
                <div className="adminHome">
                    <Link to="/adminHomepage" className="admin_homebtn">
                        <i class="fa fa-home"></i>
                    </Link>
                    <div className="admin_toggle" onClick={navToggle}>
                        <i class="fa fa-bars"></i>
                    </div>
                    <CheckStock products={products} />
                    <AdminNav nav={nav} />
                    <div className="home container-fluid">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <Link to="/adminUser" className="box users">
                                    <div className="content">
                                        <i class="fa fa-users"></i>
                                        <div className="text">View User's Settings</div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-12 col-md-6">
                                <Link to="/adminProducts" className="box products">
                                    <i class="fa fa-shopping-bag"></i>
                                    <div className="text">View Product's Settings</div>
                                </Link>
                            </div>
                            <div className="col-12 col-md-6">
                                <Link to="/adminOrders" className="box orders">
                                    <img src={truck} alt="" height="50px" style={{marginBottom: "20px"}} />
                                    <div className="text">View Orders</div>
                                    <div style={{fontSize: "16px"}}>Active Orders: {order.length}</div>
                                </Link>
                            </div>
                            <div className="col-12 col-md-6">
                                <Link to="/adminMessage" className="box  msg">
                                    <div className="counter"><i class="fa fa-envelope"></i></div>
                                    <div className="text">Messages</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
    else{
        return <Loader/>
    }
}
