import React, {useEffect} from 'react'
import '../css/categories.css'
import shoe from '../assets/show.jpg'
import { Link } from 'react-router-dom'
import Tilt from 'react-vanilla-tilt'

function CategoryCard(){

    return(
        <Link to="/product">
            <Tilt className="cat_card">
                <img className="prod_img" src={shoe} alt="Reload" />
                <div className="title">Product Type</div>
            </Tilt>
        </Link>
    )
}
export default function Categories() {

    useEffect(() => {
        document.title = "GSA Sports | Shop"
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className="cat_page">
            <div className="heading">Shop</div>
            <div className="category container-fluid">
                <div className="heading">Catergory 1</div>
                <div className="row">
                    <div className="col-3">
                        <CategoryCard/>
                    </div>
                    <div className="col-3">
                        <CategoryCard/>
                    </div>
                    <div className="col-3">
                        <CategoryCard/>
                    </div>
                    <div className="col-3">
                        <CategoryCard/>
                    </div>
                    <div className="col-3">
                        <CategoryCard/>
                    </div>
                    <div className="col-3">
                        <CategoryCard/>
                    </div>
                    <div className="col-3">
                        <CategoryCard/>
                    </div>
                    <div className="col-3">
                        <CategoryCard/>
                    </div>
                </div>
                <div className="heading mt-5">Catergory 2</div>
                <div className="row">
                    <div className="col-3">
                        <CategoryCard/>
                    </div>
                    <div className="col-3">
                        <CategoryCard/>
                    </div>
                    <div className="col-3">
                        <CategoryCard/>
                    </div>
                    <div className="col-3">
                        <CategoryCard/>
                    </div>
                    <div className="col-3">
                        <CategoryCard/>
                    </div>
                    <div className="col-3">
                        <CategoryCard/>
                    </div>
                    <div className="col-3">
                        <CategoryCard/>
                    </div>
                    <div className="col-3">
                        <CategoryCard/>
                    </div>
                </div>
            </div>
        </div>
    )
}
