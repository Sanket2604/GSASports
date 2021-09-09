import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import TopPicks from './TopPicks'
import '../css/aboutus.css'

export default function Aboutus() {

    useEffect(() => {
        document.title = "GSA Sports | About Us"
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className="container-fluid about">
            <div className="row row1">
                <div className="col-12 col-md-7 col-lg-8">
                    <div className="heading">About GSA Sports</div>
                    <div className="subheading">Est. </div>
                    <div className="content">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto pariatur temporibus soluta inventore dicta quisquam quibusdam recusandae, ullam eum in eos unde adipisci nemo! Amet id adipisci expedita qui eligendi?
                        Eum possimus accusantium aspernatur, tempore pariatur dolorum impedit necessitatibus voluptate nihil! Tempore doloremque tempora, dolorem dolores distinctio voluptatibus et quos recusandae voluptates? Excepturi rerum animi, dolorem provident consequatur exercitationem minus.
                        Impedit reprehenderit molestias fugit praesentium autem hic? Corrupti, enim qui laudantium, autem quibusdam nam ea nostrum quae eius architecto adipisci deleniti praesentium officiis totam aspernatur? Earum tempore labore unde. Omnis?
                    </div>
                </div>
                <div className="col-12 col-md-5 col-lg-4">
                    <div className="section_grid">
                        <Link to="/gallery" className="gallery"><span>Our Shop</span></Link>    
                    </div>
                </div>
            </div>
            <div className="row row2">
                <div className="col-12 col-md-5 col-lg-4">
                    <div className="img_cont"></div>
                </div>
                <div className="col-12 col-md-7 col-lg-8">
                    <div className="content">
                        <div className="heading">Owner Name</div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque pariatur blanditiis eum saepe ratione, incidunt aut sequi voluptates voluptatem, accusantium maiores sed facilis veritatis magnam, enim nulla explicabo quisquam quibusdam.
                        Cupiditate rerum incidunt quis perferendis quisquam similique debitis quas! Fugiat incidunt facilis nostrum a saepe explicabo, maxime, aperiam sapiente perferendis nobis praesentium nihil ipsam illum expedita iure nemo eaque maiores.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque pariatur blanditiis eum saepe ratione, incidunt aut sequi voluptates voluptatem, accusantium maiores sed facilis veritatis magnam, enim nulla explicabo quisquam quibusdam.
                        Cupiditate rerum incidunt quis perferendis quisquam similique debitis quas! Fugiat incidunt facilis nostrum a saepe explicabo, maxime, aperiam sapiente perferendis nobis praesentium nihil ipsam illum expedita iure nemo eaque maiores.
                    </div>
                </div>
            </div>
            <div className="row row3">
                <div className="col-12 col-md-7 col-lg-8">
                    <div className="heading">About Our Products</div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quis eligendi nam architecto ducimus modi aut animi eos sequi minima eum, dolor quaerat odio illum pariatur, doloremque voluptatum. Ipsam, quam!
                        Incidunt libero magnam repellendus esse. Distinctio doloribus a mollitia sit, quos eius reprehenderit in odio necessitatibus fugiat non perspiciatis voluptatum modi voluptatibus error aperiam nisi ea delectus suscipit laboriosam sequi?
                    </p>
                    <ul>
                        <li><i className="fa fa-check-circle" style={{color: "hsl(140, 77%, 38%)"}}></i>Dimensional accuracy</li>
                        <li><i className="fa fa-check-circle" style={{color: "hsl(140, 77%, 38%)"}}></i>Durability</li>
                        <li><i className="fa fa-check-circle" style={{color: "hsl(140, 77%, 38%)"}}></i>Resistant to climate change</li>
                        <li><i className="fa fa-check-circle" style={{color: "hsl(140, 77%, 38%)"}}></i>Sturdy manufacturing</li>
                    </ul>
                </div>
                <div className="col-12 col-md-5 col-lg-4">
                    <div className="section_grid">
                        <Link to="/shop" className="product"><span>Our Products</span></Link>
                    </div>
                </div>
            </div>
            <div className="row4">
                <TopPicks/>
            </div>
        </div>
    )
}
