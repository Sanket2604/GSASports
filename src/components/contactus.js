import React, {useEffect} from 'react'
import '../css/contactus.css'

export default function Contactus() {

    useEffect(() => {
        document.title = "GSA Sports | Contact Us"
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className="container-fluid contact_cont">
            <div className="heading">Get In Touch With Us</div>
            <div className="row">
                <div className="col-12 col-lg-6 section1">
                    <div className="thankyou">We will get in touch with you soon.</div>
                    <div className="error">
                        <div className="img"></div>
                        <div className="text">There is an Unexpected Error.<br/>Please refresh the page. </div>
                    </div>
                    <form className="form_cont" id="contact-form" method="post">
                        <div className="name">
                            <div className="form">
                                <input style={{color:'black'}} type="text" id="n" name="name" autoComplete="off" required />
                                <label htmlFor="name" className="label-name">
                                    <span className="content-name">Full Name<span style={{color:'red'}}>*</span></span>
                                </label>                           
                            </div>
                        </div>
                        <div className="email">
                            <div className="form">
                                <input style={{color:'black'}} type="text" id="e" name="email" autoComplete="off" required />
                                <label htmlFor="name" className="label-name">
                                    <span className="content-name">Email<span style={{color:'red'}}>*</span></span>
                                </label>                           
                            </div>
                        </div>
                        <div className="phone">
                            <div className="form">
                                <input style={{color:'black'}} type="number" id="cno" name="number" autoComplete="off" required />
                                <label htmlFor="name" className="label-name">
                                    <span className="content-name">Country Code<span style={{color:'red'}}>*</span></span>
                                </label>                           
                            </div>
                            <div className="form">
                                <input style={{color:'black'}} type="number" id="pno" name="number" autoComplete="off" required />
                                <label htmlFor="name" className="label-name">
                                    <span className="content-name">Phone Number<span style={{color:'red'}}>*</span></span>
                                </label>                           
                            </div>
                        </div>
                        <div className="notes">
                            <p className="heading">Requirements</p>
                            <textarea id="t" name="message" placeholder="Let us know about your requirements" required></textarea>
                        </div>
                        <div className="submit">Send Message</div>
                    </form>
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


<div className="img"></div>