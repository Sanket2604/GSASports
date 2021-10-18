import React, {useEffect, useState} from 'react'
import Loader from './loader'
import axios from 'axios'
import {url} from './url'
import '../css/categories.css'
import shoe from '../assets/show.jpg'
import { Link } from 'react-router-dom'
import Tilt from 'react-vanilla-tilt'

function Breadcrumb({filter}){
    
    if(filter){
        console.log(filter)
        return <div></div>
        // return filter.map(
        //     <a href="#shuttle" className="opts">Batminton</a>
        // )
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
                    <img className="prod_img" src={shoe} alt="Reload" />
                    <div className="title">{prod.name}</div>
                </Tilt>
            </Link>
        </div>
    )
}

function Categories_section({categories}){

    return categories.map( cat =>
        <div className="row">
            <div className="heading" id={cat._id}>{cat.name}</div>
            <CategoryCard catProd = {cat.prodTypes} catname={cat.name} />
        </div>
    )
}
export default function Categories() {

    const [cat, setCat] = useState()
    const [filter, setFilter] = useState()

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
        axios
        .get(url+'/categories/filter')
        .then((res)=>{
            if(res.status===200)
                setFilter(res.data)
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
                <div className="filter" onClick={breadCrumbs}><i class="fa fa-filter"></i></div>
                <div className="breadcrumbs container-fluid">
                    <div className="row">
                        <a href="#shuttle" className="opts col-2">Batminton</a>
                        <a href="#basket" className="opts col-2">Basketball</a>
                        <a href="#bat" className="opts col-2">Cricket</a>
                        <a href="#foot" className="opts col-2">Football</a>
                        <a href="#hockey" className="opts col-2">Hockey</a>
                        <a href="#swim" className="opts col-2">Swimming</a>
                        <a href="#tt" className="opts col-2">Table Tennis</a>
                        <a href="#tennis" className="opts col-2">Tennis</a>
                        <a href="#volley" className="opts col-2">Volleyball</a>
                        <Breadcrumb filter={filter} />
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
