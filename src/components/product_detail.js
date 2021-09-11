import React, {useEffect} from 'react'
import '../css/product_detail.css'
import cart from '../assets/nav/shopping.svg'
import shoe from '../assets/show.jpg'
import arrow_up from '../assets/nav/arrowup.png'
import arrow_down from '../assets/nav/arrowdown.png'
import { Link } from 'react-router-dom'
import Tilt from 'react-vanilla-tilt'

export default function Product_detail() {

    useEffect(() => {
        document.title = "GSA Sports | Product Type | Product Name"
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className="prod_det container-fluid">
            <div className="heading">Product Name</div>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-5">
                    <Tilt  className="img_cont">
                        <img className="prod_pic" src={shoe} alt="Reload" />
                    </Tilt>
                </div>
                <div className="col-12 col-md-6 col-lg-7">
                    <div className="content">
                        <div className="desc">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem repudiandae voluptatem cum in! Repudiandae nulla voluptate, pariatur est cum atque odio architecto, esse ipsum reiciendis fuga, dolores quasi aliquam commodi?</div>
                        <div className="size">
                            <div className="heading">Size:</div>
                            <div className="s active">6</div>
                            <div className="s">7</div>
                            <div className="s">8</div>
                            <div className="s">9</div>
                            <div className="s">10</div>
                        </div>
                        <div className="quantity">
                            <div className="counter">
                                <input type="number" />
                                <div className="controls">
                                    <div className="up"><img src={arrow_up} alt="" style={{transform:"translateY(3px)"}} height="25px" width="15px" /></div>
                                    <div className="down"><img src={arrow_down} alt="" style={{transform:"translateY(-3px)"}} height="25px" width="15px" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="cart_cont">
                            <Link to="/cart"><div className="cart_btn">Add To Cart <img src={cart} alt="Error" /></div></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
