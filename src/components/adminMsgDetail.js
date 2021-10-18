import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { url } from './url'
import Loader from './loader'
import { Link, useParams } from 'react-router-dom'
import AdminNav from './adminNav'
import '../css/adminMsgDetail.css'


function DateFormat({timestamp}) {
    
    let f_date = timestamp.split("T")
    let arr_date = f_date[0].split("-")
    let date=[]
    date[0]=arr_date[2]
    date[1]=arr_date[1]
    date[2]=arr_date[0]

    return date.join('/');
}


export default function AdminMsgDetail(props) {

    const params = useParams()
    const [admin, setAdmin] = useState()
    const [message, setMessage] = useState()
    useEffect(()=>{
        props.setAdmin("true")
        const token = localStorage.getItem('token')
        axios
        .get(url+'/message/'+params.msgID,{
            headers: { Authorization: `Bearer ${token}` }
        })
        .then((res)=>{
            setMessage(res.data)
            setAdmin(true)
        })
        .catch((err)=>{
            setAdmin(false)
        })
    },[])
    const [nav, setNav] = useState("hide");
    function navToggle(){
        if(nav=="hide"){
            setNav("show")
        }
        else{
            setNav("hide")
        }
    }

    function deletemsg(){
        const token = localStorage.getItem('token')
        axios
        .delete(url+'/message/'+params.msgID,{
            headers: { Authorization: `Bearer ${token}` }
        })
        .then((res)=>{
            alert("Dish Deleted")
            window.location.href = "/adminMessage";
        })
        .catch((err)=>{
            alert(err)
        })
    }

    if(message){
        return (
            <div className="admin_msg_detail">
                <Link to="/adminHomepage" className="admin_homebtn">
                    <i class="fa fa-home"></i>
                </Link>
                <div className="admin_toggle" onClick={navToggle}>
                    <i class="fa fa-bars"></i>
                </div>
                <div className="admin_delete_dish" onClick={deletemsg}>
                    <i class="fa fa-trash"></i>
                    <span>Delete Message</span>
                </div>
                <AdminNav nav={nav} />
                <div className="msg_detail">
                    <div className="heading">Message Details</div>
                    <div className="opt name"><span>Name:</span> {message.name}</div>
                    <div className="opt email"><span>Email:</span>{message.email}</div>
                    <div className="opt phn"><span>Phone Number:</span>+{message.phone}</div>
                    <div className="opt date"><span>Date:</span><DateFormat timestamp={message.createdAt}/></div>
                    <div className="opt msg">
                        <span>Message:</span>
                        <div>
                            {message.message}
                        </div>    
                    </div>
                </div>
            </div>
        )
    }
    else{
        return <Loader/>
    }
}
