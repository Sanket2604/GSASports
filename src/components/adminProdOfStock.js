import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { url } from './url';
import { Link, Redirect } from 'react-router-dom';
import AdminNav from './adminNav';
import '../css/adminProdOfStock.css'
import shoe from '../assets/show.jpg'
import Loader from './loader';

function ItemCard({products}){
    if(products.length>0){
        return products.map(prod =>
            <div className="col-3" id={prod._id}>
                <div className="admin_itemCard_cont">
                    <div className="item_card">
                        <div className="img_sec">
                            <img className="image" src={shoe} alt="" />
                        </div>
                        <div className="title">{prod.name}</div>
                        <div className="desc">Description: {prod.shortDescription}</div>
                        <Link to={`/adminProdDetails/${prod._id}`} className="view_btn">Edit<i className="fa fa-angle-right"></i></Link>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <h5 className="p-5 pt-4">All Products Have Stock</h5>
        )
    }
}
export default function AdminProdOfStock(props) {

    const [products, setProducts] = useState()
    const [redirect, setRedirect] = useState(true) 

    useEffect(()=>{
        document.title = "GSA Sports Admin | Products Out Of Stock"
        window.scrollTo(0, 0)
        props.setAdmin("true")
        const token = localStorage.getItem('token');
        axios
        .get(url+'/products',{
            headers: { Authorization: `Bearer ${token}` }
        })
        .then((response) =>{
            setRedirect(false)
            setProducts(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    },[])

    const [nav, setNav] = useState("hide");
    
    function navToggle(){
        if(nav==="hide"){
            setNav("show")
        }
        else{
            setNav("hide")
        }
    }


    if(products){
        if(redirect){
            return <Redirect to="/adminHomepage"/>
        }
        else{
            return (
                <div className="adminProd">
                    <Link to="/adminHomepage" className="admin_homebtn">
                        <i className="fa fa-home"></i>
                    </Link>
                    <div className="admin_toggle" onClick={navToggle}>
                        <i className="fa fa-bars"></i>
                    </div>
                    <AdminNav nav={nav} />
                    <div className="prod_list">
                        <div className="container-fluid">
                            <div className="row">
                                <h4 className="p-4">Products Out Of Stock</h4>
                                <ItemCard products={products.filter(prod => prod.stock <= 0)} />
                            </div>
                            <div className="row">
                                <h4 className="p-4">Products On Low Stock <h6 className="pt-2">(Less Than 5 units)</h6></h4>
                                <ItemCard products={products.filter(prod => prod.stock <= 5 && prod.stock > 0)} />
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

