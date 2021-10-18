import React, {useEffect, useState, Component}  from 'react'
import axios from 'axios';
import { url } from './url';
import '../css/contactus.css'

class Form extends Component{

    constructor(props){
        super(props);
        this.state={
            name: "",
            email: "",
            phone: null,
            country: null,
            message: "",
            user: null,
            count: 0,
        }
        this.sendmessage = this.sendmessage.bind(this);
        this.updateDetails = this.updateDetails.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    static getDerivedStateFromProps(props, state) {
        return {user: props.user };
    }

    updateDetails(){
        if(this.state.user && this.state.count===0){
            this.setState({
                name: this.state.user.firstname+" "+this.state.user.lastname,
                email: this.state.user.email,
                phone: this.state.user.phone,
                country: this.state.user.country,
                count: 1
            })
        }
    }

    handleInputChange(event){
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    sendmessage(){
        let emailTest=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        let phoneTest=/^\d{10}$/
        if(this.state.name.length >= 3){
            console.log(this.state.name.length)
            if(emailTest.test(this.state.email.toLowerCase())){
                if(phoneTest.test(this.state.phone)){
                    if(this.state.country.toString().length >= 1){
                        if(this.state.message){
                            console.log(this.state.country.toString()+"-"+this.state.phone.toString())
                            const token = localStorage.getItem('token')
                            axios
                            .post(url+'/message',{
                                "name": this.state.name,
                                "email": this.state.email,
                                "phone": this.state.country.toString()+"-"+this.state.phone.toString(),
                                "message": this.state.message
                            },{
                                headers: { Authorization: `Bearer ${token}` }
                            })
                            .then((res)=>{
                                document.querySelector(".notes").classList.remove("err")
                                document.querySelector(".phone").classList.remove("err")
                                document.querySelector(".email").classList.remove("err")
                                document.querySelector(".name").classList.remove("err")
                                document.querySelector(".thankyou").classList.add("active")
                            })
                            .catch((err)=>{
                                document.querySelector(".error").classList.add("active")
                                console.log(err)
                            })
                        }
                        else{
                            document.querySelector(".notes").classList.add("err")
                            document.querySelector(".phone").classList.remove("err")
                            document.querySelector(".email").classList.remove("err")
                            document.querySelector(".name").classList.remove("err")
                        }
                    }
                    else{
                        document.querySelector(".phone").classList.add("err")
                        document.querySelector(".email").classList.remove("err")
                        document.querySelector(".name").classList.remove("err")
                        document.querySelector(".notes").classList.remove("err")

                    }
                }
                else{
                    document.querySelector(".phone").classList.add("err")
                    document.querySelector(".notes").classList.remove("err")
                    document.querySelector(".email").classList.remove("err")
                    document.querySelector(".name").classList.remove("err")
                }
            }
            else{
                document.querySelector(".email").classList.add("err")
                document.querySelector(".notes").classList.remove("err")
                document.querySelector(".phone").classList.remove("err")
                document.querySelector(".name").classList.remove("err")
            }
        }
        else{
            document.querySelector(".name").classList.add("err")
            document.querySelector(".email").classList.remove("err")
            document.querySelector(".notes").classList.remove("err")
            document.querySelector(".phone").classList.remove("err")
        }
    }
    render(){
        if(this.state.user){
            return(
                <form className="form_cont" id="contact-form" onMouseOver={this.updateDetails}>
                    <div className="name">
                        <div className="form">
                            <input style={{color:'black'}} type="text" id="n" name="name" autoComplete="off" value={this.state.name} onChange = {this.handleInputChange} required />
                            <label htmlFor="name" className="label-name">
                                <span className="content-name">Full Name<span style={{color:'red'}}>*</span></span>
                            </label>             
                        </div>
                    </div>
                    <div className="email">
                        <div className="form">
                            <input style={{color:'black'}} type="text" id="e" name="email" autoComplete="off" value={this.state.email} onChange = {this.handleInputChange} required />
                            <label htmlFor="name" className="label-name">
                                <span className="content-name">Email<span style={{color:'red'}}>*</span></span>
                            </label>                           
                        </div>
                    </div>
                    <div className="phone">
                        <div className="form">
                            <input style={{color:'black'}} type="number" id="e" name="country" autoComplete="off" value={this.state.country} onChange = {this.handleInputChange} required />
                            <label htmlFor="name" className="label-name">
                                <span className="content-name">Country Code<span style={{color:'red'}}>*</span></span>
                            </label>                           
                        </div>
                        <div className="form">
                            <input style={{color:'black'}} type="number" id="pno" name="phone" autoComplete="off" value={this.state.phone} onChange = {this.handleInputChange} required />
                            <label htmlFor="name" className="label-name">
                                <span className="content-name">Phone Number<span style={{color:'red'}}>*</span></span>
                            </label>                
                        </div>
                    </div>
                    <div className="notes">
                        <p className="heading">Message</p>
                        <textarea id="t" name="message" placeholder="Enter Your Message Here" onChange = {this.handleInputChange} required></textarea>
                    </div>
                    <div className="submit" onClick={this.sendmessage}>Send Message</div>
                </form>
            )
        }
        else{
            return(
                <form className="form_cont" id="contact-form" method="post">
                    <div className="name">
                        <div className="form">
                            <input style={{color:'black'}} type="text" id="n" name="name" autoComplete="off" onChange = {this.handleInputChange} required />
                            <label htmlFor="name" className="label-name">
                                <span className="content-name">Full Name<span style={{color:'red'}}>*</span></span>
                            </label>                           
                        </div>
                    </div>
                    <div className="email">
                        <div className="form">
                            <input style={{color:'black'}} type="text" id="e" name="email" autoComplete="off" onChange = {this.handleInputChange} required />
                            <label htmlFor="name" className="label-name">
                                <span className="content-name">Email<span style={{color:'red'}}>*</span></span>
                            </label>                           
                        </div>
                    </div>
                    <div className="phone">
                        <div className="form">
                            <input style={{color:'black'}} type="number" id="cno" name="number" autoComplete="off" onChange = {this.handleInputChange} required />
                            <label htmlFor="name" className="label-name">
                                <span className="content-name">Country Code<span style={{color:'red'}}>*</span></span>
                            </label>                           
                        </div>
                        <div className="form">
                            <input style={{color:'black'}} type="number" id="pno" name="number" autoComplete="off" onChange = {this.handleInputChange} required />
                            <label htmlFor="name" className="label-name">
                                <span className="content-name">Phone Number<span style={{color:'red'}}>*</span></span>
                            </label>                           
                        </div>
                    </div>
                    <div className="notes">
                        <p className="heading">Message</p>
                        <textarea id="t" name="message" placeholder="Enter Your Message Here" onChange = {this.handleInputChange} required></textarea>
                    </div>
                    <div className="submit" onClick={this.sendmessage}>Send Message</div>
                </form>
            )
        }
    }
}

export default function Contactus() {

    const [user, setUser] = useState()
    useEffect(() => {
        document.title = "GSA Sports | Contact Us"
        window.scrollTo(0, 0)
        const token = localStorage.getItem('token')
        axios
        .get(url+'/user/getUser',{
            headers: { Authorization: `Bearer ${token}` }
        })
        .then((res)=>{
            setUser(res.data)
        })
        .catch((err)=>{
            setUser(false)
        })
    },[]);

    return (
        <div className="container-fluid contact_cont">
            <div className="heading">Get In Touch With Us</div>
            <div className="row">
                <div className="col-12 col-lg-6 section1">
                    <div className="thankyou"><i class="fa fa-check-circle"></i>Message Successfully Sent!!</div>
                    <div className="error"><i class="fa fa-times-circle"></i>Message Not Sent!!</div>
                    <Form user={user} />
                </div>
                <div className="col-12 col-lg-6 section2 mt-3 mt-md-5 mt-lg-0">
                    <div className="section2_cont">
                        <div className="heading">
                            <p className="big">You can also reach us by:</p>
                        </div>
                        <div className="contact_us">
                            <div className="reach phone"><i className="fa fa-phone"></i> <a href="#">+91 9999999999</a></div>
                            <div className="reach email"><i className="fa fa-at"></i> <a href="mailto:" target="_blank">email@email.com</a></div>
                            <div className="reach address"><i className="fa fa-map-marker"></i> <a href="https://www.google.com/maps/place/Alpha+Emerald/@13.0581743,77.6453443,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae17567a01a12d:0x956a1b1ffb811494!8m2!3d13.0581735!4d77.6475331" target="_blank">Address</a></div>
                        </div>
                        <div className="social">
                            <div className="socialcontainer">
                                <div className="social-icons">
                                    <a className="mob" href=""><i className="fa fa-phone"></i></a>            
                                    <a className="loc" target="blank" href=""><i className="fa fa-facebook-f"></i></a>
                                    <a className="mail" target="blank" href="mailto:"><i className="fa fa-envelope"></i></a>
                                    <a className="yt" target="blank" href="#"><i className="fa fa-youtube"></i></a>
                                    <a className="link" target="blank" href="#"><i className="fa fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


