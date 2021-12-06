import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import {url} from './url'
import '../css/signup.css'

export default class Signup extends Component {

    constructor(props){
        super(props);
        this.state={
            firstname: "",
            lastname: "",
            username: "",
            email: "",
            country: 91,
            phone: "",
            pass: "",
            re_pass: "",
            address: "",
            landmark: "",
            city: "",
            pincode: "",
            state: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.signup = this.signup.bind(this)
    }

    componentDidMount(){
        document.title = "GSA Sports | Sign Up"
        window.scrollTo(0, 0)
    }

    handleInputChange(event){
        const email_pattern = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value
        },()=>{
            if(this.state.phone!=="" && this.state.phone.length===10 && this.state.country!==""){
                document.querySelector('.phone').classList.remove('error')
                document.querySelector('.L_phone').classList.remove('error')
            }
            else{
                document.querySelector('.phone').classList.add('error')
                document.querySelector('.L_phone').classList.add('error')
            }
    
            if(this.state.state!==""){
                document.querySelector('.state').classList.remove('error')
                document.querySelector('.L_state').classList.remove('error')
            }
            else{
                document.querySelector('.state').classList.add('error')
                document.querySelector('.L_state').classList.add('error')
            }
    
            if(this.state.firstname!=="" && this.state.firstname.length>=3){
                document.querySelector('.firstname').classList.remove('error')
                document.querySelector('.L_firstname').classList.remove('error')
            }
            else{
                document.querySelector('.firstname').classList.add('error')
                document.querySelector('.L_firstname').classList.add('error')
            }
    
            if(this.state.pincode!==""){
                document.querySelector('.pincode').classList.remove('error')
                document.querySelector('.L_pincode').classList.remove('error')
            }
            else{
                document.querySelector('.pincode').classList.add('error')
                document.querySelector('.L_pincode').classList.add('error')
            }
    
            if(this.state.city!==""){
                document.querySelector('.city').classList.remove('error')
                document.querySelector('.L_city').classList.remove('error')
            }
            else{
                document.querySelector('.city').classList.add('error')
                document.querySelector('.L_city').classList.add('error')
            }
    
            if(this.state.landmark!==""){
                document.querySelector('.landmark').classList.remove('error')
                document.querySelector('.L_landmark').classList.remove('error')
            }
            else{
                document.querySelector('.landmark').classList.add('error')
                document.querySelector('.L_landmark').classList.add('error')
            }
    
            if(this.state.pass!==""){
                document.querySelector('.pass').classList.remove('error')
                document.querySelector('.L_pass').classList.remove('error')
            }
            else{
                document.querySelector('.pass').classList.add('error')
                document.querySelector('.L_pass').classList.add('error')
            }
    
            if(this.state.re_pass!=="" && this.state.pass===this.state.re_pass){
                document.querySelector('.re_pass').classList.remove('error')
                document.querySelector('.L_re_pass').classList.remove('error')
            }
            else{
                document.querySelector('.re_pass').classList.add('error')
                document.querySelector('.L_re_pass').classList.add('error')
            }
    
            if(this.state.email!=="" && email_pattern.test(this.state.email)){
                document.querySelector('.email').classList.remove('error')
                document.querySelector('.L_email').classList.remove('error')
            }
            else{
                document.querySelector('.email').classList.add('error')
                document.querySelector('.L_email').classList.add('error')
            }
    
            if(this.state.username!=="" && this.state.username.length>=4){
                document.querySelector('.username').classList.remove('error')
                document.querySelector('.L_username').classList.remove('error')
            }
            else{
                document.querySelector('.username').classList.add('error')
                document.querySelector('.L_username').classList.add('error')
            }
            if(this.state.lastname!==""){
                document.querySelector('.lastname').classList.remove('error')
                document.querySelector('.L_lastname').classList.remove('error')
            }
            else{
                document.querySelector('.lastname').classList.add('error')
                document.querySelector('.L_lastname').classList.add('error')
            }
            if(this.state.address!==""){
                document.querySelector('.address').classList.remove('error')
            }
            else{
                document.querySelector('.address').classList.add('error')
            }
        })
    }

    signup(){   
        const email_pattern = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
        console.log(this.state)
        if(this.state.firstname!=="" && this.state.firstname.length>=3 && this.state.lastname!=="" && this.state.username!=="" && this.state.username.length>=4 && this.state.email!=="" && email_pattern.test(this.state.email) && this.state.pass!=="" && this.state.re_pass!=="" && this.state.pass===this.state.re_pass && this.state.address!=="" && this.state.landmark!=="" && this.state.city!=="" &&  this.state.pincode!=="" &&  this.state.state!=="" && this.state.phone!=="" && this.state.phone.length===10 && this.state.country!==""){
            axios
            .post(url+'/user/signup',{
                "firstname": this.state.firstname,
                "lastname": this.state.lastname,
                "country": this.state.country,
                "phone": this.state.phone,
                "email": this.state.email,
                "address": this.state.address,
                "landmark": this.state.landmark,
                "city": this.state.city,
                "pincode": this.state.pincode,
                "state": this.state.state,
                "username": this.state.username,
                "password": this.state.pass
            })
            .then((response) =>{
                alert(response.data.status)
                window.location.href = "/login";
            })
            .catch((error) => {
                console.log("Error ", error)
            })
        }
    }

    render(){
        return (
            <div className="signup_cont">
                <div className="signup container-fluid">
                    <h4>Welcome To GSA Sports</h4>
                    <h6>Create An Account</h6>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="form">
                                <input style={{color:'black'}} type="text" className="firstname" name="firstname" autoComplete="off" onChange={this.handleInputChange} value={this.state.firstname} required />
                                <label htmlFor="firstname" className="label-name L_firstname">
                                    <span className="content-name"> First Name</span>
                                </label>                           
                            </div>
                        </div>
                        
                        <div className="col-12 col-md-6">
                            <div className="form">
                                <input style={{color:'black'}} type="text" className="lastname" name="lastname" autoComplete="off" onChange={this.handleInputChange} value={this.state.lastname} required />
                                <label htmlFor="lastname" className="label-name L_lastname">
                                    <span className="content-name"> Last Name</span>
                                </label>                           
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="form">
                                <input style={{color:'black'}} type="text" className="username" name="username" autoComplete="off" onChange={this.handleInputChange} value={this.state.username} required />
                                <label htmlFor="username" className="label-name L_username">
                                    <span className="content-name">New Username</span>
                                </label>                           
                            </div>
                        </div>
                        
                        <div className="col-12 col-md-6">
                            <div className="form">
                                <input style={{color:'black'}} type="text" className="email" name="email" autoComplete="off" onChange={this.handleInputChange} value={this.state.email} required />
                                <label htmlFor="email" className="label-name L_email">
                                    <span className="content-name"> Email Address</span>
                                </label>                           
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="form">
                                <input style={{color:'black'}} type="password" className="pass" name="pass" autoComplete="off" onChange={this.handleInputChange} value={this.state.pass} required />
                                <label htmlFor="password" className="label-name L_pass">
                                    <span className="content-name">Password</span>
                                </label>                           
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form">
                                <input style={{color:'black'}} type="password" className="re_pass" name="re_pass" autoComplete="off" onChange={this.handleInputChange} value={this.state.re_pass} required />
                                <label htmlFor="password" className="label-name L_re_pass">
                                    <span className="content-name">Re-Enter Password</span>
                                </label>                           
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form">
                                <input style={{color:'black'}} type="number" className="country" name="country" autoComplete="off" onChange={this.handleInputChange} value={this.state.country} required />
                                <label htmlFor="password" className="label-name L_country">
                                    <span className="content-name">Country Code</span>
                                </label>                           
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form">
                                <input style={{color:'black'}} type="number" className="phone" name="phone" autoComplete="off" onChange={this.handleInputChange} value={this.state.phone} required />
                                <label htmlFor="password" className="label-name L_phone">
                                    <span className="content-name"> Phone Number</span>
                                </label>                           
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="notes">
                            <h5 style={{margin: "20px 0"}}>Billing Address</h5>
                            <textarea id="t" name="address" placeholder="Address" className="address" value={this.state.address} onChange={this.handleInputChange} required></textarea>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form">
                                <input style={{color:'black'}} type="text" name="landmark" className="landmark" autoComplete="off" onChange={this.handleInputChange} value={this.state.landmark} required />
                                <label htmlFor="lastname" className="label-name L_landmark">
                                    <span className="content-name">Address Landmark</span>
                                </label>                           
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form">
                                <input style={{color:'black'}} type="text" name="city" className="city" autoComplete="off" onChange={this.handleInputChange} value={this.state.city} required />
                                <label htmlFor="city" className="label-name L_city">
                                    <span className="content-name">City</span>
                                </label>                           
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form">
                                <input style={{color:'black'}} type="text" name="pincode" className="pincode" autoComplete="off" onChange={this.handleInputChange} value={this.state.pincode} required />
                                <label htmlFor="pincode" className="label-name L_pincode">
                                    <span className="content-name">Pincode</span>
                                </label>                           
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form">
                                <input style={{color:'black'}} type="text" name="state" className="state" autoComplete="off" onChange={this.handleInputChange} value={this.state.state} required />
                                <label htmlFor="state" className="label-name L_state">
                                    <span className="content-name">State</span>
                                </label>                           
                            </div>
                        </div>
                    </div>
                    <div style={{display: "grid", justifyContent: "center"}}>
                        <div className="submit" onClick={this.signup}>Signup</div>
                        <Link to="/login"><div className="msg">Already have an account? Login</div></Link>
                    </div>
                </div>
            </div>
        )
    }
}
