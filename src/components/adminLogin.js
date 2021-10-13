import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../css/adminLogin.css'

export default function AdminLogin(props) {

    useEffect(()=>{
        props.setAdmin("true")
    })
    return (
        <div className="adminLogin">
            <div className="login">
                    <div className="username">
                        <div className="form">
                            <input id="username" type="text" name="email" autoComplete="off" required />
                            <label htmlFor="password" className="label-name">
                                <span className="content-name">Enter Your Username</span>
                            </label>                           
                        </div>
                    </div>
                    <div className="password">
                        <div className="form">
                            <input id="pass" type="password" name="password" autoComplete="off" required />
                            <label htmlFor="password" className="label-name">
                                <span className="content-name">Enter Password</span>
                            </label>                           
                        </div>
                    </div>
                    <Link to="/adminHomepage"><div className="submit">Login</div></Link>
                </div>
        </div>
    )
}
