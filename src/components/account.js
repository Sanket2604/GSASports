import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { url } from './url'
import '../css/account.css'
import dp from '../assets/account/unknown.jfif'
import { Link, Redirect } from 'react-router-dom'
import Loader from './loader'


function Shipping({shipping}){
    if(shipping.length!==0){
        return shipping.map((shipAdd)=>{
            <div>
                <div className="name">Name: {shipAdd.name}</div>
                {shipAdd.address}<i class="fa fa-edit"></i>
            </div>
        })
    }
    else{
        return(
            <div></div>
        )
    }
}
export default function Account() {


    const [response, setResponse] = useState(false)
    const [show, setShow] = useState(false)
    const [user, setUser] = useState()

    useEffect(() => {
        document.title = "GSA Sports | Your Account"
        window.scrollTo(0, 0)
        const token = localStorage.getItem('token')
        axios
        .get(url+'/user/getuser',{
            headers: { Authorization: `Bearer ${token}` }
        })
        .then((res)=>{
            if(res.status===200)
                setShow(true)
                
            setUser(res.data)
            setResponse(true)
            
        })
        .catch((err)=>{
            setResponse(true)
            setShow(false)
            console.log(err)
        })
    }, []);

    if(response){
        if(show){
            return (
                <div className="account_cont container">
                    <div className="heading">Welcome {user.firstname}</div>
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
                            <div className="sec name"><span>Name:</span>{user.firstname} {user.lastname}<i class="fa fa-edit"></i></div>
                            <div className="sec phn"><span>Phone Number:</span> +{user.phone}<i class="fa fa-edit"></i></div>
                            <div className="sec email"><span>Email Id:</span> {user.email}<i class="fa fa-edit"></i></div>
                            <div className="sec bill_add">
                                <span>Billing Address:<br/></span> 
                                {user.billing}<i class="fa fa-edit"></i>
                            </div>
                            
                        </div>
                        <div className="col-12 col-md-6 column column2">
                            <div className="sec ship_add">
                                <span>Your Shipping Addresses:<br/></span> 
                                <Shipping shipping={user.shipping}/>
                                <div className="add_ship">
                                    <i class="fa fa-plus-square"></i>
                                    Add A Shipping Address
                                </div>
                            </div>
                            <Link to="/your_orders"><div className="order_btn">View Previous Orders</div></Link>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return <Redirect to="/login" />
        }
    }
    else{
        return(
            <Loader/>
        )
    }
}
