import React, {useEffect} from 'react'
import { useParams } from 'react-router';
import '../css/product.css'
import ItemCard from './itemCard'
import products from '../db/productList';

function ItemsRender({prod}) {
    
    return products.map(sprod => {
        if(prod.pname === sprod.cat_name){
            return(
                <div className="col-12 col-md-6 col-lg-3">
                    <ItemCard sprod={sprod} />
                </div>
            )
        }
    })
}

export default function Product() {

    const prod = useParams();
    useEffect(() => {
        document.title = `GSA Sports | ${prod.pname}`
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className="prod_page">
            <div className="heading">{prod.pname}</div>
            <div className="container-fluid">
                <div className="row">
                    <ItemsRender prod={prod}/>
                </div>
            </div>
        </div>
    )
}
