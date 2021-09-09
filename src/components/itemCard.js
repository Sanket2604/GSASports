import React from 'react'
import '../css/itemCard.css'
import shoe from '../assets/show.jpg'
import { Link } from 'react-router-dom'
import Tilt from 'react-vanilla-tilt'

export default function ItemCard() {
    
    return (
        <Tilt className="anim_cont">
            <div className="itemCard_cont">
                <div className="item_card">
                    <div className="img_sec">
                        <img className="image" src={shoe} alt="" />
                    </div>
                    <div className="title">Product Name</div>
                    <div className="desc">Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    <Link to="/product_detail" className="view_btn">View Now<i className="fa fa-angle-right"></i></Link>
                </div>
            </div>
        </Tilt>
    )
}
