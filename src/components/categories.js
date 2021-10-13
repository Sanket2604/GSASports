import React, {useEffect} from 'react'
import { categories } from '../db/categoriesDB'
import '../css/categories.css'
import shoe from '../assets/show.jpg'
import { Link } from 'react-router-dom'
import Tilt from 'react-vanilla-tilt'

function CategoryCard({catProd}){

    return catProd.map( prod =>
        <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
            <Link to={`/product/${prod.name}`}>
                <Tilt className="cat_card">
                    <img className="prod_img" src={shoe} alt="Reload" />
                    <div className="title">{prod.name}</div>
                </Tilt>
            </Link>
        </div>
    )
}

function Categories_section(){

    return categories.map( cat =>
        <div className="row">
            <div className="heading" id={cat.id}>{cat.name}</div>
            <CategoryCard catProd = {cat.prodTypes} />
        </div>
    )
}
export default function Categories() {

    useEffect(() => {
        document.title = "GSA Sports | Shop"
        window.scrollTo(0, 0)
        console.log(shoe)
    }, []);

    function breadCrumbs(){
        document.querySelector('.breadcrumbs').classList.toggle('show')
    }

    return (
        <div className="cat_page">
            <div className="filter" onClick={breadCrumbs}><i class="fa fa-filter"></i></div>
            <div className="breadcrumbs">
                <a href="#shuttle" className="opts">Batminton</a>
                <a href="#basket" className="opts">Basketball</a>
                <a href="#bat" className="opts">Cricket</a>
                <a href="#foot" className="opts">Football</a>
                <a href="#hockey" className="opts">Hockey</a>
                <a href="#swim" className="opts">Swimming</a>
                <a href="#tt" className="opts">Table Tennis</a>
                <a href="#tennis" className="opts">Tennis</a>
                <a href="#volley" className="opts">Volleyball</a>
            </div>
            <div className="heading">Shop</div>
            <div className="category container-fluid">
                <Categories_section/>      
            </div>
        </div>
    )
}
