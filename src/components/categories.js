import React, {useEffect, useState} from 'react'
import Loader from './loader'
import axios from 'axios'
import {url} from './url'
import '../css/categories.css'
import shoe from '../assets/show.jpg'
import { Link } from 'react-router-dom'
import Tilt from 'react-vanilla-tilt'

function Breadcrumb({filters, breadCrumbs}){

    if(filters){
        return filters.map(filter =>
            <a id={filter.name} href={`#${filter._id}`} className="opts col-2" onClick={breadCrumbs}>{filter.name}</a>
        )
    }
    else{
        return(
            <div></div>
        )
    }
}

function CategoryCard({catProd,catname}){

    return catProd.map( prod =>
        <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center" id={prod._id}>
            <Link to={`/product/${catname}/${prod.name}`}>
                <Tilt className="cat_card">
                    <img className="prod_img" src={url+prod.image} alt="Reload" />
                    <div className="title">{prod.name}</div>
                </Tilt>
            </Link>
        </div>
    )
}

function Categories_section({categories}){

    return categories.map( cat =>
        <div className="row" id={cat._id} style={{paddingTop: "70px"}}>
            <div className="heading">{cat.name}</div>
            <CategoryCard catProd = {cat.prodTypes} catname={cat.name} />
        </div>
    )
}
export default function Categories() {

    const [cat, setCat] = useState()

    useEffect(() => {
        document.title = "GSA Sports | Shop"
        window.scrollTo(0, 0)
        axios
        .get(url+'/categories')
        .then((res)=>{
            if(res.status===200)
                setCat(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[]);

    function breadCrumbs(){
        document.querySelector('.breadcrumbs').classList.toggle('show')
    }

    if(cat){
        return (
            <div className="cat_page">
                <div className="filter" onClick={breadCrumbs}><i className="fa fa-filter"></i></div>
                <div className="breadcrumbs container-fluid">
                    <div className="row">
                        <Breadcrumb filters={cat} breadCrumbs={breadCrumbs} />
                    </div>                    
                </div>
                <div className="heading">Shop</div>
                <div className="category container-fluid">
                    <Categories_section categories={cat}/>      
                </div>
            </div>
        )
    }
    else{
        return <Loader/>
    }
}
