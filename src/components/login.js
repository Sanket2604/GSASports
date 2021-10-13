import React, {Component} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom'
import {url} from "./url"
import '../css/login.css'


export default class Login extends Component {

    componentDidMount(){
        document.title = "GSA Sports | Login"
        window.scrollTo(0, 0)
    }

    constructor(props){
        super(props)
        this.state={
            username: "",
            password: "",
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.submit = this.submit.bind(this)
    }
    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    submit(){
        axios
        .post(url+'/user/login',{
            "username": this.state.username,
            "password": this.state.password
        })
        .then((response) =>{
            console.log("Success!!", response.data.token)
        })
        .catch(error => {
            alert("Error ", error)
        })
    }

    render(){
        return (
            <div className="login_cont">
                <div className="login">
                    <div className="email">
                        <div className="form">
                            <input style={{color:'black'}} id="email" type="text" name="username" autoComplete="off" onChange={this.handleInputChange} required />
                            <label htmlFor="password" className="label-name">
                                <span className="content-name">Enter Your Username</span>
                            </label>                           
                        </div>
                    </div>
                    <div className="password">
                        <div className="form">
                            <input style={{color:'black'}} id="pass" type="password" name="password" autoComplete="off" onChange={this.handleInputChange} required />
                            <label htmlFor="password" className="label-name">
                                <span className="content-name">Enter Password</span>
                            </label>                           
                        </div>
                    </div>
                    <div className="submit" onClick={this.submit}>Login</div>
                    <Link to="/signup"><div className="msg">Don't have an account? Create A New Account</div></Link>
                </div>
            </div>
        )
    }
}
