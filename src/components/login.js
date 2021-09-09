import React from 'react'
import { Link } from 'react-router-dom'
import '../css/login.css'

export default function Login() {
    return (
        <div className="login_cont">
            <div className="login">
                <div className="email">
                    <div className="form">
                        <input style={{color:'black'}} type="text" name="email" autoComplete="off" required />
                        <label htmlFor="password" className="label-name">
                            <span className="content-name">Enter Email ID</span>
                        </label>                           
                    </div>
                </div>
                <div className="password">
                    <div className="form">
                        <input style={{color:'black'}} type="password" name="password" autoComplete="off" required />
                        <label htmlFor="password" className="label-name">
                            <span className="content-name">Enter Password</span>
                        </label>                           
                    </div>
                </div>
                <div className="submit">Login</div>
                <Link to="/signup"><div className="msg">Don't have an account? Create A New Account</div></Link>
            </div>
        </div>
    )
}
