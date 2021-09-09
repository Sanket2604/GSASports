import React from 'react'
import '../css/footer.css'

export default function Footer() {
    return (
        <div className="footer">
            <div className="container-fluid" style={{maxWidth: "1800px"}}>
                <div className="row row1">
                    <div className="col-12 col-md-4 col-lg-2 section section1">
                        <div className="img"></div>
                    </div>
                    <div className="col-12 col-md-8 col-lg-6 mt-5 mt-md-0 section section2">
                        <div className="box">
                            <a target="_blank" className="address" href="#">
                                <i className="fa fa-building "></i>
                                <span>Address</span>
                            </a>
                            <a href="mailto:#" target="_blank" className="email"><i className="fa fa-at "></i><span>email@email.com</span></a>
                            <a className="phone" href="#"><i className="fa fa-phone"></i><span>+91 9999999999</span></a>
                            <div className="social-icons_footer">
                                <a className="wht" href="#"><i className="fa fa-whatsapp"></i></a>
                                <a className="fac" target="_blank" href="#"><i className="fa fa-facebook-f"></i></a>
                                <a className="yt" target="_blank" href="#"><i className="fa fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-4 mt-5 mt-lg-0 section section3">
                        <div className="heading">Location:</div>
                        <div className="loc_box">
                            <iframe width="100%" height="100%" style={{border:"0"}} allowFullScreen="" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6462562457514!2d77.64534431482289!3d13.058174290799144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17567a01a12d%3A0x956a1b1ffb811494!2sAlpha%20Emerald!5e0!3m2!1sen!2sin!4v1630043194301!5m2!1sen!2sin"></iframe>
                        </div>
                    </div>
                </div>
                <div className="row row2">
                    <div className="col-12">
                        <div className="company_line"><div>GSA Sports © 2021 Copyright</div><div>All Rights Reserved</div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
