import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import AdminNav from './adminNav'
import '../css/adminMsgDetail.css'

export default function AdminMsgDetail(props) {

    useEffect(()=>{
        props.setAdmin("true")
    })
    const [nav, setNav] = useState("hide");
    function navToggle(){
        if(nav=="hide"){
            setNav("show")
        }
        else{
            setNav("hide")
        }
    }

    return (
        <div className="admin_msg_detail">
            <Link to="/adminHomepage" className="admin_homebtn">
                <i class="fa fa-home"></i>
            </Link>
            <div className="admin_toggle" onClick={navToggle}>
                <i class="fa fa-bars"></i>
            </div>
            <AdminNav nav={nav} />
            <div className="msg_detail">
                <div className="heading">Message Details</div>
                <div className="opt name"><span>Name:</span> Sanket Banerjee</div>
                <div className="opt email"><span>Email:</span>umaymailme2604@gmail.com</div>
                <div className="opt phn"><span>Phone Number:</span>+91 9900803562</div>
                <div className="opt msg">
                    <span>Message:</span>
                    <div>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus veritatis distinctio officiis quidem minus illum deserunt delectus atque maxime quia! Reprehenderit fugit eveniet delectus, officia repellat natus ad aperiam excepturi?
                        Aspernatur tempore iste unde quisquam ullam odio fugit tenetur itaque ea ad maxime consequatur incidunt nobis blanditiis earum, impedit nesciunt accusantium. Repellat tempora itaque aliquid necessitatibus labore, aperiam autem vel?
                        Est reprehenderit, soluta ea, tenetur eveniet, ullam dolore delectus asperiores rerum nam doloremque consequatur magnam esse accusantium dolor ut dolorum vel? Adipisci dolores nam dolorum, enim placeat porro reiciendis. Libero.    
                    </div>    
                </div>
            </div>
        </div>
    )
}
