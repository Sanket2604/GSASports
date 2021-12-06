import React, {useEffect, useState} from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import { url } from './url'
import AdminNav from './adminNav'
import '../css/adminMsg.css'
import Loader from './loader'

function DateFormat({timestamp}) {
    
    let f_date = timestamp.split("T")
    let arr_date = f_date[0].split("-")
    let date=[]
    date[0]=arr_date[2]
    date[1]=arr_date[1]
    date[2]=arr_date[0]

    return date.join('/');
}

function UnreadMessages({msgs}){
    
    const unread_msgs = msgs.filter(msg=>msg.read===false)
    if(unread_msgs.length>0){
        return unread_msgs.map(msg=>
            <Link to={`/adminMsgDetail/${msg._id}`} className="msg" id={msg._id}>
                <div className="name">{msg.name}</div>
                <div className="number">+{msg.phone}</div>
                <div className="email">{msg.email}</div>
                <div className="date"><DateFormat timestamp={msg.createdAt}/></div>
            </Link>
        )
    }
    else{
        return (
            <div className="no_new_msgs"> 
                No New Messages
            </div>
        )
    }
}

function ReadMessages({msgs}){

    
    function deletemsg(msgID){
        const token = localStorage.getItem('token')
        axios
        .delete(url+'/message/'+msgID,{
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(()=>{
            alert("Message Deleted")
            window.location.href = "/adminMessage";
        })
        .catch((err)=>{
            alert(err)
        })
    }

    return msgs.filter(msg=>msg.read===true).map(msg=>
        <Link to={`/adminMsgDetail/${msg._id}`} className="msg" id={msg._id}>
            <div className="name">{msg.name}</div>
            <div className="number">+{msg.phone}</div>
            <div className="email">{msg.email}</div>
            <div className="date"><DateFormat timestamp={msg.createdAt}/></div>
            <div className="delete" onClick={()=>deletemsg(msg._id)}><i class="fa fa-minus"></i></div>
        </Link>
    )
}
export default function AdminMsg(props) {
    
    const [nav, setNav] = useState("hide");
    const [admin, setAdmin] = useState()
    const [messages, setMessages] = useState()

    useEffect(()=>{
        props.setAdmin("true")
        const token = localStorage.getItem('token')
        axios
        .get(url+'/message',{
            headers: { Authorization: `Bearer ${token}` }
        })
        .then((res)=>{
            setAdmin(true)
            setMessages(res.data)
        })
        .catch((err)=>{
            setAdmin(false)
        })
    }, [])

    function navToggle(){
        if(nav==="hide"){
            setNav("show")
        }
        if(nav==="show"){
            setNav("hide")
        }
    }
    
    if(messages){
        if(admin){
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
                            <UnreadMessages msgs={messages}/>
                        </div>
                        <div className="msg_sec read_msgs">
                            <div className="heading">Read Messages</div>
                            <ReadMessages msgs={messages}/>
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
        return <Loader/>
    }
}
