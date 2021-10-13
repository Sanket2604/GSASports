import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import AdminNav from './adminNav'
import truck from '../assets/admin/truck.svg'
import '../css/adminHome.css'

export default function AdminHome(props) {
    useEffect(()=>{
        props.setAdmin("true")
    })
    const [nav, setNav] = useState("hide");
    function navToggle(){
        if(nav=="hide"){
            setNav("show")
        }
        else{
            setNav("hide")
        }
    }
    return (
        <div className="adminHome">
            <Link to="/adminHomepage" className="admin_homebtn">
                <i class="fa fa-home"></i>
            </Link>
            <div className="admin_toggle" onClick={navToggle}>
                <i class="fa fa-bars"></i>
            </div>
            <AdminNav nav={nav} />
            <div className="home container-fluid">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <Link to="/adminUser" className="box users">
                            <div className="content">
                                <i class="fa fa-users"></i>
                                <div className="text">View User's Settings</div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-12 col-md-6">
                        <Link to="/adminProducts" className="box products">
                            <i class="fa fa-shopping-bag"></i>
                            <div className="text">View Product's Settings</div>
                        </Link>
                    </div>
                    <div className="col-12 col-md-6">
                        <Link to="/adminOrders" className="box orders">
                            <img src={truck} alt="" height="50px" style={{marginBottom: "20px"}} />
                            <div className="text">View Orders</div>
                        </Link>
                    </div>
                    <div className="col-12 col-md-6">
                        <Link to="/adminMessage" className="box  msg">
                            <div className="counter"><i class="fa fa-envelope"></i></div>
                            <div className="text">Messages</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
