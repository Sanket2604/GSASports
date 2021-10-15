import React, {useState, useEffect} from 'react'
import axios from "axios";
import { Link, useHistory } from 'react-router-dom'
import {url} from "./url"
import '../css/login.css'


export default function Login(props) {

    useEffect(() => {
        document.title = "GSA Sports | Login"
        window.scrollTo(0, 0)
    }, []);

    let history = useHistory()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    function handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        if(name==="username"){
            setUsername(value)
        }

        if(name==="password"){
            setPassword(value)
        }
    }

    function submit(){
        axios
        .post(url+'/user/login',{
            "username": username,
            "password": password
        })
        .then((response) =>{
            localStorage.setItem('token', response.data.token)
            window.location.reload();
        })
        .catch((error) => {
            console.log("Error ", error)
        })
    }

    return (
        <div className="login_cont">
            <div className="login">
                <div className="email">
                    <div className="form">
                        <input style={{color:'black'}} id="email" type="text" name="username" autoComplete="off" onChange={handleInputChange} required />
                        <label htmlFor="password" className="label-name">
                            <span className="content-name">Enter Your Username</span>
                        </label>                           
                    </div>
                </div>
                <div className="password">
                    <div className="form">
                        <input style={{color:'black'}} id="pass" type="password" name="password" autoComplete="off" onChange={handleInputChange} required />
                        <label htmlFor="password" className="label-name">
                            <span className="content-name">Enter Password</span>
                        </label>                           
                    </div>
                </div>
                <div className="submit" onClick={submit}>Login</div>
                <Link to="/signup"><div className="msg">Don't have an account? Create A New Account</div></Link>
            </div>
        </div>
    )
}
