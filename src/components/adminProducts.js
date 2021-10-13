import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import AdminNav from './adminNav';
import '../css/adminProducts.css'
import shoe from '../assets/show.jpg'

function ItemCard(){
    return(
        <div className="col-3">
            <div className="admin_itemCard_cont">
                <div className="item_card">
                    <div className="img_sec">
                        <img className="image" src={shoe} alt="" />
                    </div>
                    <div className="title">Product Name</div>
                    <div className="desc">Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    <Link to="/adminProdDetails" className="view_btn">Edit<i className="fa fa-angle-right"></i></Link>
                </div>
            </div>
        </div>
    )
}
export default function AdminProducts(props) {

    useEffect(()=>{
        props.setAdmin("true")
    })
    const [nav, setNav] = useState("hide");
    function navToggle(){
        if(nav==="hide"){
            setNav("show")
        }
        else{
            setNav("hide")
        }
    }
    return (
        <div className="adminProd">
            <Link to="/adminHomepage" className="admin_homebtn">
                <i class="fa fa-home"></i>
            </Link>
            <div className="admin_toggle" onClick={navToggle}>
                <i class="fa fa-bars"></i>
            </div>
            <Link to="/adminProdDetails" className="admin_add_dish">
                <i class="fa fa-plus"></i>
                <span>Add Product</span>
            </Link>
            <AdminNav nav={nav} />
            <div className="breadcrumbs">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2">
                            <div className="opts">Batminton</div>
                        </div>
                        <div className="col-2">
                            <div className="opts">Basketball</div>
                        </div>
                        <div className="col-2">
                            <div className="opts">Cricket</div>
                        </div>
                        <div className="col-2">
                            <div className="opts">Football</div>
                        </div>
                        <div className="col-2">
                            <div className="opts">Hockey</div>
                        </div>
                        <div className="col-2">
                            <div className="opts">Swimming</div>
                        </div>
                        <div className="col-2">
                            <div className="opts">Table Tennis</div>
                        </div>
                        <div className="col-2">
                            <div className="opts">Tennis</div>
                        </div>
                        <div className="col-2">
                            <div className="opts">Volleyball</div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="prod_list">
                <div className="container-fluid">
                    <div className="row">
                            <ItemCard/>
                            <ItemCard/>
                            <ItemCard/>
                            <ItemCard/>
                            <ItemCard/>
                            <ItemCard/>
                            <ItemCard/>
                            <ItemCard/>
                            <ItemCard/>
                            <ItemCard/>
                            <ItemCard/>
                            <ItemCard/>
                    </div>
                </div>
            </div>
        </div>
    )
}
