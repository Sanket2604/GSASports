import React, {useEffect} from 'react'
import '../css/account.css'
import dp from '../assets/account/unknown.jfif'
import { Link } from 'react-router-dom'

export default function Account() {

    useEffect(() => {
        document.title = "GSA Sports | Your Account"
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className="account_cont container">
            <div className="heading">Your Profile</div>
            <div className="row row1">
                <div className="col-12">
                    <div className="img_cont">
                        <img src={dp} alt="" />
                    </div>
                </div>
            </div>
            <div className="row row2">
                <div className="col-12 col-md-6 column column1">
                    <div className="heading">Your Details:</div>
                    <div className="sec name"><span>Name:</span>Sanket Banerjee<i class="fa fa-edit"></i></div>
                    <div className="sec phn"><span>Phone Number:</span> +91 9999999999<i class="fa fa-edit"></i></div>
                    <div className="sec email"><span>Email Id:</span> email@email.com<i class="fa fa-edit"></i></div>
                    <div className="sec bill_add">
                        <span>Billing Address:<br/></span> 
                        <div className="name">Name: Full Name</div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur assumenda quis odio reprehenderit quas iste laborum, sint qui exercitationem cupiditate.<i class="fa fa-edit"></i></div>
                    <div className="sec ship_add">
                        <span>Shipping Address:<br/></span> 
                        <div className="name">Name: Full Name</div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur assumenda quis odio reprehenderit quas iste laborum, sint qui exercitationem cupiditate.<i class="fa fa-edit"></i>
                    </div>
                </div>
                <div className="col-12 col-md-6 column column2">
                    <div className="heading">Orders:</div>
                    <div className="sec phn"><span>Orders Placed:</span> 2</div>
                    <Link to="/your_orders"><div className="order_btn">View Previous Orders</div></Link>
                </div>
            </div>
        </div>
    )
}
