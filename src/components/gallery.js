import React from 'react'
import '../css/gallery.css'
import vid1 from '../assets/gallery/vid1.mp4'
import vid2 from '../assets/gallery/vid2.mp4'
import vid3 from '../assets/gallery/vid3.mp4'
import vid4 from '../assets/gallery/vid4.mp4'
import vid5 from '../assets/gallery/vid5.mp4'
import vid6 from '../assets/gallery/vid6.mp4'
import vid7 from '../assets/gallery/vid7.mp4'
import vid8 from '../assets/gallery/vid8.mp4'
import vid9 from '../assets/gallery/vid9.mp4'
import vid10 from '../assets/gallery/vid10.mp4'

export default function Gallery() {
    return (
        <div className="gallery_grid container-fluid">
            <div className="row row1">
                <div className="col-12 col-md-6 col-lg-5 pic pic1"></div>
                <div className="col-12 col-md-6 col-lg-7 container-fluid">
                    <div className="row">
                        <div className="col-6 pic">
                            <video control autoPlay muted loop>
                                <source src={vid1} type="video/mp4"/>
                            </video>
                        </div>
                        <div className="col-6 pic pic3"></div>
                        <div className="col-6 pic pic4"></div>
                        <div className="col-6 pic">
                            <video control autoPlay muted loop>
                                <source src={vid10} type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row2">
                <div className="col-6 col-lg-3 pic pic6"></div>
                <div className="col-6 col-lg-3 pic pic7"></div>
                <div className="col-6 col-lg-3 pic">
                    <video control autoPlay muted loop>
                        <source src={vid2} type="video/mp4"/>
                    </video>
                </div>
                <div className="col-6 col-lg-3 pic pic9"></div>
            </div>
            <div className="row row3 d-md-flex flex-row-reverse">
                <div className="col-12 col-md-6 col-lg-5 pic pic24"></div>
                <div className="col-12 col-md-6 col-lg-7 container-fluid">
                    <div className="row">
                        <div className="col-6 pic">
                            <video control autoPlay muted loop>
                                <source src={vid3} type="video/mp4"/>
                            </video>
                        </div>
                        <div className="col-6 pic pic11"></div>
                        <div className="col-6 pic pic12"></div>
                        <div className="col-6 pic">
                            <video control autoPlay muted loop>
                                <source src={vid4} type="video/mp4"/>
                            </video>
                        </div>
                        <div className="col-6 pic pic14">
                            <video control autoPlay muted loop>
                                <source src={vid5} type="video/mp4"/>
                            </video>
                        </div>
                        <div className="col-6 pic pic15"></div>
                    </div>
                </div>
            </div>
            <div className="row row4">
                <div className="col-6 col-lg-3 pic pic16">
                    <video control autoPlay muted loop>
                        <source src={vid6} type="video/mp4"/>
                    </video>
                </div>
                <div className="col-6 col-lg-3 pic pic17"></div>
                <div className="col-6 col-lg-3 pic pic18"></div>
                <div className="col-6 col-lg-3 pic pic19">
                    <video control autoPlay muted loop>
                        <source src={vid7} type="video/mp4"/>
                    </video>
                </div>
                <div className="col-6 col-lg-3 pic pic20"></div>
                <div className="col-6 col-lg-3 pic pic21">
                    <video control autoPlay muted loop>
                        <source src={vid8} type="video/mp4"/>
                    </video>
                </div>
                <div className="col-6 col-lg-3 pic pic22">
                    <video control autoPlay muted loop>
                        <source src={vid9} type="video/mp4"/>
                    </video>
                </div>
                <div className="col-6 col-lg-3 pic pic23"></div>
            </div>
        </div>
    )
}
