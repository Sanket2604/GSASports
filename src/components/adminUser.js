import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import AdminNav from './adminNav';
import '../css/adminUser.css'

export default function AdminUser(props) {

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
        <div className="adminUser">
            <Link to="/adminHomepage" className="admin_homebtn">
                <i class="fa fa-home"></i>
            </Link>
            <div className="admin_toggle" onClick={navToggle}>
                <i class="fa fa-bars"></i>
            </div>
            <AdminNav nav={nav} />
            <div className="user_opt">
                <div className="table admin_access">
                    <div className="heading">Admin Access</div>
                    <div className="field">
                        <div className="record name">Full Name</div>
                        <div className="record username">Username</div>
                        <div className="record email">Email</div>
                        <div className="record phnNo">Phone Number</div>
                    </div>
                    <div className="field">
                        <div className="record name">Sanket Banerjee</div>
                        <div className="record username">Main Developer</div>
                        <div className="record email">umaymailme2604@gmail.com</div>
                        <div className="record phnNo">+91 9900803562</div>
                    </div>
                </div>
                <div className="table normal_users">
                    <div className="heading">Normal Users</div>
                    <div className="field">
                        <div className="record name">Full Name</div>
                        <div className="record username">Username</div>
                        <div className="record address">Address</div>
                        <div className="record email">Email</div>
                        <div className="record phnNo">Phone Number</div>
                    </div>
                    <div className="field">
                        <div className="record name">Sanket Banerjee</div>
                        <div className="record username">Main Developer</div>
                        <div className="record address">Maruti Nandan Appartment, Mahaveer Rescidency, Avalahalli, Yelahanka, Bangalore - 560064</div>
                        <div className="record email">umaymailme2604@gmail.com</div>
                        <div className="record phnNo">+91 9900803562</div>
                        <div className="delete"><i class="fa fa-minus"></i></div>
                        <div className="delete"><i class="fa fa-minus"></i></div>
                    </div>
                    <div className="field">
                        <div className="record name">Sanket Banerjee</div>
                        <div className="record username">Main Developer</div>
                        <div className="record address">Maruti Nandan Appartment, Mahaveer Rescidency, Avalahalli, Yelahanka, Bangalore - 560064</div>
                        <div className="record email">umaymailme2604@gmail.com</div>
                        <div className="record phnNo">+91 9900803562</div>
                        <div className="delete"><i class="fa fa-minus"></i></div>
                    </div>
                    <div className="field">
                        <div className="record name">Sanket Banerjee</div>
                        <div className="record username">Main Developer</div>
                        <div className="record address">Maruti Nandan Appartment, Mahaveer Rescidency, Avalahalli, Yelahanka, Bangalore - 560064</div>
                        <div className="record email">umaymailme2604@gmail.com</div>
                        <div className="record phnNo">+91 9900803562</div>
                        <div className="delete"><i class="fa fa-minus"></i></div>
                    </div>
                    <div className="field">
                        <div className="record name">Sanket Banerjee</div>
                        <div className="record username">Main Developer</div>
                        <div className="record address">Maruti Nandan Appartment, Mahaveer Rescidency, Avalahalli, Yelahanka, Bangalore - 560064</div>
                        <div className="record email">umaymailme2604@gmail.com</div>
                        <div className="record phnNo">+91 9900803562</div>
                        <div className="delete"><i class="fa fa-minus"></i></div>
                    </div>
                    <div className="field">
                        <div className="record name">Sanket Banerjee</div>
                        <div className="record username">Main Developer</div>
                        <div className="record address">Maruti Nandan Appartment, Mahaveer Rescidency, Avalahalli, Yelahanka, Bangalore - 560064</div>
                        <div className="record email">umaymailme2604@gmail.com</div>
                        <div className="record phnNo">+91 9900803562</div>
                        <div className="delete"><i class="fa fa-minus"></i></div>
                    </div>
                    <div className="field">
                        <div className="record name">Sanket Banerjee</div>
                        <div className="record username">Main Developer</div>
                        <div className="record address">Maruti Nandan Appartment, Mahaveer Rescidency, Avalahalli, Yelahanka, Bangalore - 560064</div>
                        <div className="record email">umaymailme2604@gmail.com</div>
                        <div className="record phnNo">+91 9900803562</div>
                        <div className="delete"><i class="fa fa-minus"></i></div>
                    </div>
                    <div className="field">
                        <div className="record name">Sanket Banerjee</div>
                        <div className="record username">Main Developer</div>
                        <div className="record address">Maruti Nandan Appartment, Mahaveer Rescidency, Avalahalli, Yelahanka, Bangalore - 560064</div>
                        <div className="record email">umaymailme2604@gmail.com</div>
                        <div className="record phnNo">+91 9900803562</div>
                        <div className="delete"><i class="fa fa-minus"></i></div>
                    </div>
                    <div className="field">
                        <div className="record name">Sanket Banerjee</div>
                        <div className="record username">Main Developer</div>
                        <div className="record address">Maruti Nandan Appartment, Mahaveer Rescidency, Avalahalli, Yelahanka, Bangalore - 560064</div>
                        <div className="record email">umaymailme2604@gmail.com</div>
                        <div className="record phnNo">+91 9900803562</div>
                        <div className="delete"><i class="fa fa-minus"></i></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
