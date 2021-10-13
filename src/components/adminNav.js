import React, {useEffect} from 'react'
import truck from '../assets/admin/truck.svg'
import { Link } from 'react-router-dom'
import '../css/adminNav.css'

export default function AdminNav(props) {
    
    useEffect(() => {
        if(props.nav==="show"){
            document.querySelector('.AdminNav').classList.add('show')
        }
        else{
            document.querySelector('.AdminNav').classList.remove('hide')
        }
    })
    return (
        <div className="AdminNav">
            <Link to="/adminUser" className="nav_link">
                <i class="fa fa-users"></i>
            </Link>
            <Link to="/adminProducts" className="nav_link">
                <i class="fa fa-shopping-bag"></i>
            </Link>
            <Link to="/adminOrders" className="nav_link">
                <img src={truck} alt="" height="30px"/>
            </Link>
            <Link to="/adminMessage" className="nav_link">
                <i class="fa fa-envelope"></i>
            </Link>
        </div>
    )
}
