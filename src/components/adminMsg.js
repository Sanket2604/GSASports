import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import AdminNav from './adminNav'
import '../css/adminMsg.css'

export default function AdminMsg(props) {
    
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
        <div className="admin_msg">
            <Link to="/adminHomepage" className="admin_homebtn">
                <i class="fa fa-home"></i>
            </Link>
            <div className="admin_toggle" onClick={navToggle}>
                <i class="fa fa-bars"></i>
            </div>
            <AdminNav nav={nav} />
            <div className="msgs_cont">
                <div className="msg_sec unread_msgs">
                    <div className="heading">Unread Messages</div>
                    <Link to="/adminMsgDetail" className="msg">
                        <div className="name">Sanket Banerjee</div>
                        <div className="number">+91 9900803562</div>
                        <div className="email">umaymailme2604@gmail.com</div>
                        <div className="date">30/09/2021</div>
                    </Link>
                    <Link to="/adminMsgDetail" className="msg">
                        <div className="name">Sanket Banerjee</div>
                        <div className="number">+91 9900803562</div>
                        <div className="email">umaymailme2604@gmail.com</div>
                        <div className="date">30/09/2021</div>
                    </Link>
                    <Link to="/adminMsgDetail" className="msg">
                        <div className="name">Sanket Banerjee</div>
                        <div className="number">+91 9900803562</div>
                        <div className="email">umaymailme2604@gmail.com</div>
                        <div className="date">30/09/2021</div>
                    </Link>
                    <Link to="/adminMsgDetail" className="msg">
                        <div className="name">Sanket Banerjee</div>
                        <div className="number">+91 9900803562</div>
                        <div className="email">umaymailme2604@gmail.com</div>
                        <div className="date">30/09/2021</div>
                    </Link>
                </div>
                <div className="msg_sec read_msgs">
                    <div className="heading">Read Messages</div>
                    <Link to="/adminMsgDetail" className="msg">
                        <div className="name">Sanket Banerjee</div>
                        <div className="number">+91 9900803562</div>
                        <div className="email">umaymailme2604@gmail.com</div>
                        <div className="date">30/09/2021</div>
                    </Link>
                    <Link to="/adminMsgDetail" className="msg">
                        <div className="name">Sanket Banerjee</div>
                        <div className="number">+91 9900803562</div>
                        <div className="email">umaymailme2604@gmail.com</div>
                        <div className="date">30/09/2021</div>
                    </Link>
                    <Link to="/adminMsgDetail" className="msg">
                        <div className="name">Sanket Banerjee</div>
                        <div className="number">+91 9900803562</div>
                        <div className="email">umaymailme2604@gmail.com</div>
                        <div className="date">30/09/2021</div>
                    </Link>
                    <Link to="/adminMsgDetail" className="msg">
                        <div className="name">Sanket Banerjee</div>
                        <div className="number">+91 9900803562</div>
                        <div className="email">umaymailme2604@gmail.com</div>
                        <div className="date">30/09/2021</div>
                    </Link>
                    <Link to="/adminMsgDetail" className="msg">
                        <div className="name">Sanket Banerjee</div>
                        <div className="number">+91 9900803562</div>
                        <div className="email">umaymailme2604@gmail.com</div>
                        <div className="date">30/09/2021</div>
                    </Link>
                    <Link to="/adminMsgDetail" className="msg">
                        <div className="name">Sanket Banerjee</div>
                        <div className="number">+91 9900803562</div>
                        <div className="email">umaymailme2604@gmail.com</div>
                        <div className="date">30/09/2021</div>
                    </Link>
                    <Link to="/adminMsgDetail" className="msg">
                        <div className="name">Sanket Banerjee</div>
                        <div className="number">+91 9900803562</div>
                        <div className="email">umaymailme2604@gmail.com</div>
                        <div className="date">30/09/2021</div>
                    </Link>
                    <Link to="/adminMsgDetail" className="msg">
                        <div className="name">Sanket Banerjee</div>
                        <div className="number">+91 9900803562</div>
                        <div className="email">umaymailme2604@gmail.com</div>
                        <div className="date">30/09/2021</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
