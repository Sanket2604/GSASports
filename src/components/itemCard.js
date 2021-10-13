import React from 'react'
import '../css/itemCard.css'
import { Link } from 'react-router-dom'
import show from '../assets/show.jpg'
import Tilt from 'react-vanilla-tilt'

export default function ItemCard({sprod}) {

    const image = require('../assets/show.jpg')
    if(sprod){
        return (
            <Tilt className="anim_cont">
                <div className="itemCard_cont" id={sprod.id}>
                    <div className="item_card">
                        <div className="img_sec">
                            <img className="image" src={show} alt="" />
                        </div>
                        <div className="title">{sprod.name}</div>
                        <div className="desc">{sprod.short_desc}</div>
                        <Link to={`/product_detail/${sprod.category}/${sprod.name}`} className="view_btn">View Now<i className="fa fa-angle-right"></i></Link>
                    </div>
                </div>
            </Tilt>
        )
    }
    else{
        return (
            <Tilt className="anim_cont">
                <div className="itemCard_cont">
                    <div className="item_card">
                        <div className="img_sec">
                            <img className="image" src={show} alt="" />
                        </div>
                        <div className="title">Product Name</div>
                        <div className="desc">Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        <Link to="/product_detail" className="view_btn">View Now<i className="fa fa-angle-right"></i></Link>
                    </div>
                </div>
            </Tilt>
        )
    }
}
