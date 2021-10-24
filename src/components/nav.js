import React, {useEffect, useState} from 'react'
import '../css/nav.css'
import axios from 'axios'
import { url } from './url'
import { Link, useHistory } from 'react-router-dom'


function Loginopt({show}){

    function logout(){
        localStorage.clear()
        window.location.reload()
    }

    if(show){
        return(
            <Link to="/account">
                <div className="opt opt2">
                    <div className="dropdown">
                        <div className="option" onClick={logout}>Logout</div>
                    </div>
                </div>
            </Link>
        )
    }
    else{
        return(
            <Link to="/login">
                <div className="opt opt2">
                    <div className="dropdown">
                        <Link to="/login"><div className="option">Signin</div></Link>
                        <Link to="/signup"><div className="option">Signup</div></Link>
                    </div>
                </div>
            </Link>
        )
    }
}

export default function Nav(props) {

    const [show, setShow] = useState(false) 

    useEffect(() => {
        if(props.admin==='true'){
            document.querySelector('.nav').classList.add('true')
        }
        const token = localStorage.getItem('token')
        axios
        .get(url+'/user/verify',{
            headers: { Authorization: `Bearer ${token}` }
        })
        .then((res)=>{
            if(res.status===200)
                setShow(true)
        })
        .catch((err)=>{
            console.log(err)
        })
    })
    function toggleSideBar(){
        const menuBtn = document.querySelector('.menu-btn');
        if(menuBtn.classList.contains('open')) {
            menuBtn.classList.remove('open');
        }
        else {        
            menuBtn.classList.add('open');
        }
        document.querySelector('.sidebar').classList.toggle('slide');
        document.querySelector('.backdrop').classList.toggle('back');
    }

    function sideBarClose(){
        document.querySelector('.sidebar').classList.remove('slide');
        document.querySelector('.menu-btn').classList.remove('open');
        document.querySelector('.backdrop').classList.remove('back');
    }
    return (
        <div>
            <div className="nav">
                <Link to=""><div className="logo"></div></Link>
                <div className="navitems">
                    <Link to="/home"><div className="navele">Home</div></Link>
                    <Link to="/about"><div className="navele">About Us</div></Link>
                    <Link to="/contact"><div className="navele">Contact Us</div></Link>
                    <Link to="/shop"><div className="navele">Shop</div></Link>
                </div>
                <div className="nav_sec">
                    <Link to="/cart"><div className="opt opt1"></div></Link>
                    <Loginopt show={show} />
                </div>
                <div className="menu-btn" style={{transition: "all .5s ease-in-out"}} onClick={toggleSideBar}>
                    <div className="menu-btn_burger" style={{transition: "all .5s ease-in-out"}}></div>
                </div>
            </div>
            <div className="backdrop" onClick={sideBarClose}></div>
            <div className="sidebar">
                <div className="list">
                    <Link to="/home"><div className="listele">Home</div></Link>
                    <Link to="/about"><div className="listele">About Us</div></Link>
                    <Link to="/contact"><div className="listele">Contact Us</div></Link>
                    <Link to="/shop"><div className="listele no">Shop</div></Link>
                </div>
            </div>
        </div>
    )
}
