import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { url } from './url';
import { Link, Redirect } from 'react-router-dom';
import AdminNav from './adminNav';
import '../css/adminProducts.css'
import shoe from '../assets/show.jpg'
import Loader from './loader';

function Filter(props){

    const [cats, setCats] = useState()

    useEffect(()=>{
        const token = localStorage.getItem('token');
        axios
        .get(url+'/categories',{
            headers: { Authorization: `Bearer ${token}` }
        })
        .then((response) =>{
            setCats(response.data)
        })
        .catch(error => {
            console.log("Failed To Update Cart List")
        })
    },[])

    function changeProds(name){
        let filtered_prod=props.products.filter(prod => prod.sportCat === name)
        props.setProducts(filtered_prod)
    }

    if(cats){
        return cats.map(cat =>
            <div className="col-2" id={cat._id} onClick={()=>changeProds(cat.name)}>
                <div className="opts">{cat.name}</div>
            </div>
        )
    }
    else{
        return( 
            <div className="circle_loader_cont">
                <div className="circle_loader"></div>
            </div>
        )
    }
    
}

function ItemCard({products}){
    
    if(products){
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
            <div className="circle_loader_cont">
                <div className="circle_loader"></div>
            </div>
        )
    }
}

export default function AdminProducts(props) {

    const [products, setProducts] = useState()
    const [redirect, setRedirect] = useState(true) 

    useEffect(()=>{
        document.title = "GSA Sports Admin | Products"
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
            console.log("Failed To Get Products")
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
            return <Redirect to="/adminLogin"/>
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
                    <Link to="/adminProdDetails/Add_Prod" className="admin_add_dish">
                        <i className="fa fa-plus"></i>
                        <span>Add Product</span>
                    </Link>
                    <AdminNav nav={nav} />
                    <div className="breadcrumbs">
                        <div className="container-fluid">
                            <div className="row">
                                <Filter setProducts={setProducts} products={products}/>
                            </div>
                        </div>
                        
                    </div>
                    <div className="prod_list">
                        <div className="container-fluid">
                            <div className="row">
                                <ItemCard products={products} />
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
