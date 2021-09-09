import React, {useEffect} from 'react'
import '../css/product.css'
import ItemCard from './itemCard'

export default function Product() {

    useEffect(() => {
        document.title = "GSA Sports | Product Detail"
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className="prod_page">
            <div className="heading">Category 1</div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <ItemCard/>
                    </div>
                    <div className="col-3">
                        <ItemCard/>
                    </div>
                    <div className="col-3">
                        <ItemCard/>
                    </div>
                    <div className="col-3">
                        <ItemCard/>
                    </div>
                    <div className="col-3">
                        <ItemCard/>
                    </div>
                    <div className="col-3">
                        <ItemCard/>
                    </div>
                    <div className="col-3">
                        <ItemCard/>
                    </div>
                    <div className="col-3">
                        <ItemCard/>
                    </div>
                    <div className="col-3">
                        <ItemCard/>
                    </div>
                    <div className="col-3">
                        <ItemCard/>
                    </div>
                    <div className="col-3">
                        <ItemCard/>
                    </div>
                    <div className="col-3">
                        <ItemCard/>
                    </div>
                    <div className="col-3">
                        <ItemCard/>
                    </div>
                    <div className="col-3">
                        <ItemCard/>
                    </div>
                    <div className="col-3">
                        <ItemCard/>
                    </div>
                    <div className="col-3">
                        <ItemCard/>
                    </div>
                    <div className="col-3">
                        <ItemCard/>
                    </div>
                    <div className="col-3">
                        <ItemCard/>
                    </div>
                    <div className="col-3">
                        <ItemCard/>
                    </div>
                    <div className="col-3">
                        <ItemCard/>
                    </div>
                </div>
            </div>
        </div>
    )
}
