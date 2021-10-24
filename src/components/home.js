import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import TopPicks from './TopPicks'
import '../css/homepage.css'
import vid from '../assets/homepage/vid.mp4'
import swim from '../assets/homepage/swim_icon.svg'
import cric from '../assets/homepage/cricket_icon.png'
import bskt from '../assets/homepage/basketball_icon.svg'
import tt from '../assets/homepage/tt.svg'
import volleyball from '../assets/homepage/volleyball_icon.jpg'
import tennis from '../assets/homepage/tennis_icon.jpg'
import batminton from '../assets/homepage/batminton_icon.jpg'
import hockey from '../assets/homepage/hockey_icon.jpg'

export default function Home() {
    
    useEffect(() => {
        document.title = "GSA Sports | Home"
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className="homepage">
            <div className="video_sec">
                <video control autoPlay muted loop>
                    <source src={vid} type="video/mp4"/>
                </video>
                <div className="overlay"><div>Welcome To GSA Sports</div></div>
            </div>
            <div className="top_pick_cont">
                <TopPicks/>
            </div>
            <div className="section1 conrainer-fluid">
                <div className="heading">Categories</div>
                <div className="row row1">
                    <div className="col-12 col-md-6">
                        <div className="image_cont"></div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="content">
                            <img src={swim} alt="" height="50px" />
                            <div className="title">Shop For Swiming</div>
                            <div className="shop_btn">View Shop <i class="fa fa-angle-right"></i></div>
                        </div>
                    </div>
                </div>
                <div className="row row2">
                    <div className="col-12 col-md-6">
                        <div className="image_cont"></div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="content">
                            <img src={cric} alt="" height="80px" />
                            <div className="title">Shop For Cricket</div>
                            <div className="shop_btn">View Shop <i class="fa fa-angle-right"></i></div>
                        </div>
                    </div>
                </div>
                <div className="row row3 d-md-flex flex-row-reverse">
                    <div className="col-12 col-md-6">
                        <div className="image_cont"></div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="content">
                            <img src={bskt} alt="" height="50px" />
                            <div className="title">Shop For Basketball</div>
                            <div className="shop_btn">View Shop <i class="fa fa-angle-right"></i></div>
                        </div>
                    </div>
                </div>
                <div className="row row4 d-md-flex flex-row-reverse">
                    <div className="col-12 col-md-6">
                        <div className="image_cont"></div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="content">
                            <img src={tt} alt="" height="50px" />
                            <div className="title">Shop For Table Tennis</div>
                            <div className="shop_btn">View Shop <i class="fa fa-angle-right"></i></div>
                        </div>
                    </div>
                </div>
                <div className="row row5">
                    <div className="col-12 col-md-6">
                        <div className="image_cont"></div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="content">
                            <img src={tennis} alt="" height="80px" />
                            <div className="title">Shop For Tennis</div>
                            <div className="shop_btn">View Shop <i class="fa fa-angle-right"></i></div>
                        </div>
                    </div>
                </div>
                <div className="row row6">
                    <div className="col-12 col-md-6">
                        <div className="image_cont"></div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="content">
                            <img src={batminton} alt="" height="120px" style={{backgroundColor: "hsl(199, 100%, 40%)", borderRadius: "100%"}} />
                            <div className="title">Shop For Batminton</div>
                            <div className="shop_btn">View Shop <i class="fa fa-angle-right"></i></div>
                        </div>
                    </div>
                </div>
                <div className="row row7 d-md-flex flex-row-reverse">
                    <div className="col-12 col-md-6">
                        <div className="image_cont"></div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="content">
                            <img src={volleyball} alt="" height="50px" />
                            <div className="title">Shop For Volleyball</div>
                            <div className="shop_btn">View Shop <i class="fa fa-angle-right"></i></div>
                        </div>
                    </div>
                </div>
                <div className="row row8 d-md-flex flex-row-reverse">
                    <div className="col-12 col-md-6">
                        <div className="image_cont"></div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="content">
                            <img src={hockey} alt="" height="60px" />
                            <div className="title">Shop For Hockey</div>
                            <div className="shop_btn">View Shop <i class="fa fa-angle-right"></i></div>
                        </div>
                    </div>
                </div>
                <div className="row row4">
                    <div className="viewmore_cont">
                        <Link to="/shop" className="viewmore_btn">View More <i class="fa fa-angle-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
