import React from 'react'
import '../css/itemCard.css'
import { Link } from 'react-router-dom'
import { url } from './url'
import Tilt from 'react-vanilla-tilt'

export default function ItemCard({sprod}) {

    if(sprod){
        console.log()
        return (
            <Tilt className="anim_cont">
                <div className="itemCard_cont" id={sprod._id}>
                    <div className="item_card">
                        <div className="img_sec">
                            <img className="image" src={url+sprod.image} alt="" />
                        </div>
                        <div className="title">{sprod.name}</div>
                        <div className="desc">{sprod.shortDescription}</div>
                        <Link to={`/product_detail/${sprod.sportCat}/${sprod.name}/${sprod._id}`} className="view_btn">View Now<i className="fa fa-angle-right"></i></Link>
                    </div>
                </div>
            </Tilt>
        )
    }
    else{
        return (
            <div>
                
            </div>
        )
    }
}
