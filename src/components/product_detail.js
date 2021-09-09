import React, {useEffect} from 'react'
import '../css/product_detail.css'
import cart from '../assets/nav/shopping.svg'
import shoe from '../assets/show.jpg'
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
                            <div className="s s1">6</div>
                            <div className="s">7</div>
                            <div className="s">8</div>
                            <div className="s">9</div>
                            <div className="s">10</div>
                        </div>
                        <div className="cart_cont">
                            <div className="cart_btn">Add To Cart <img src={cart} alt="Error" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
