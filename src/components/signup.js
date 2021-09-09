import React from 'react'
import '../css/signup.css'

export default function Signup() {
    return (
        <div className="signup_cont">
            <div className="signup">
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
                <div className="password">
                    <div className="form">
                        <input style={{color:'black'}} type="password" name="password" autoComplete="off" required />
                        <label htmlFor="password" className="label-name">
                            <span className="content-name">Re-Enter Password</span>
                        </label>                           
                    </div>
                </div>
                <div className="notes">
                    <p className="heading">Address</p>
                    <textarea id="t" name="message" placeholder="Enter Your Address" required></textarea>
                </div>
                <div className="submit">Signup</div>
            </div>
        </div>
    )
}
