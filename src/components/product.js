import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router';
import axios from 'axios';
import {url} from './url'
import Loader from './loader'
import '../css/product.css'
import ItemCard from './itemCard'

function ItemsRender({products}) {
    const prod = useParams();
    return products.filter(product=>product.prodCat === prod.pname && product.sportCat === prod.cat).map(sprod => 
        <div className="col-12 col-md-6 col-lg-3">
            <ItemCard sprod={sprod} />
        </div>
    )
}

export default function Product() {

    const prod = useParams();
    const [products, setProducts] = useState()
    useEffect(() => {
        document.title = `GSA Sports | ${prod.pname}`
        window.scrollTo(0, 0)
        axios
        .get(url+'/products')
        .then((res)=>{
            if(res.status===200)
                setProducts(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, []);


    if(products){
        return (
            <div className="prod_page">
                <div className="heading">{prod.pname}</div>
                <div className="container-fluid">
                    <div className="row">
                        <ItemsRender products={products}/>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return <Loader/>
    }
}
