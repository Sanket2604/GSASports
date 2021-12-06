import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Loader from './loader';
import { url } from './url';
import { Link, Redirect } from 'react-router-dom';
import AdminNav from './adminNav';
import '../css/adminUser.css'

export default function AdminUser(props) {

    const [admin, setAdmin] = useState()
    const [users, setUsers] = useState()
    const [nav, setNav] = useState("hide");

    useEffect(()=>{
        props.setAdmin("true")
        const token = localStorage.getItem('token')
        console.log(token)
        axios
        .get(url+'/user',{
            headers: { Authorization: `Bearer ${token}` }
        })
        .then((res)=>{
            setAdmin(true)
            setUsers(res.data)
        })
        .catch((err)=>{
            setAdmin(false)
            setUsers(true)
        })
    },[])

    function navToggle(){
        if(nav=="hide"){
            setNav("show")
        }
        else{
            setNav("hide")
        }
    }

    function Admin(){
        return users.filter(user=>user.admin===true).map(user =>
            <div className="field">
                <div className="record name">{user.firstname} {user.lastname}</div>
                <div className="record username">{user.username}</div>
                <div className="record email">{user.email}</div>
                <div className="record phnNo">{user.phone}</div>
            </div>
        )
    }

    function NormalUser(){
        let user = users.filter(user=>user.admin===false)
        if(user){
            return user.map(user =>
                <div className="field" id={user._id}>
                    <div className="record name">{user.firstname} {user.lastname}</div>
                    <div className="record username">{user.username}</div>
                    <div className="record address">{user.billing[0].address}, {user.billing[0].landmark}, {user.billing[0].city} - {user.billing[0].pincode}, {user.billing[0].state}</div>
                    <div className="record email">{user.email}</div>
                    <div className="record phnNo">{user.phone}</div>
                    <div className="delete" onClick={()=>deleteuser(user._id)}><i class="fa fa-minus"></i></div>
                </div>
            )
        }
        else{
            <div></div>
        }
    }
    
    function deleteuser(userID){
        const token = localStorage.getItem('token')
        axios
        .delete(url+'/user/deleteUser/'+userID,{
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(()=>{
            alert("User Deleted")
            window.location.reload()
        })
        .catch((err)=>{
            alert(err)
        })
    }
    
    if(users){
        if(admin){
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
                            <Admin />
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
                            <NormalUser />
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return <Redirect to="/adminHomepage" />
        }
    }
    else{
        return <Loader />
    }
}
