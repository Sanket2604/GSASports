import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import TopPicks from './TopPicks'
import '../css/homepage.css'
import swim from '../assets/homepage/swim_icon.svg'
import cric from '../assets/homepage/cricket_icon.png'
import bskt from '../assets/homepage/basketball_icon.svg'

export default function Home() {
    
    useEffect(() => {
        document.title = "GSA Sports | Home"
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className="homepage">
            <div className="video_sec">
                Video Section
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
                <div className="row row2 d-md-flex flex-row-reverse">
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
                <div className="row row3">
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
                <div className="row row4">
                    <div className="viewmore_cont">
                        <Link to="/shop">
                            <div className="viewmore_btn">View More <i class="fa fa-angle-right"></i></div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
